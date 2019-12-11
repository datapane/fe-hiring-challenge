import requests

from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render
from django.conf import settings
from django.template import engines
from django.views.generic import TemplateView

from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action

from .models import FileUpload, EntryForm
from .serializers import FileUploadSerializer, EntryFormSerializer


def index(request):
    return render(request, 'base.html')


def loremipsum(request):
    return render(request, 'index.html')

class FileUploadView(ModelViewSet):
    queryset = FileUpload.objects.all()
    serializer_class = FileUploadSerializer
    parser_classes = (MultiPartParser, FormParser,)

    def perform_create(self, serializer):
        serializer.save(csvfile=self.request.data.get('csvfile'))

    def get_queryset(self):
        queryset = FileUpload.objects.all()
        pk = self.request.query_params.get('id', None)
        if pk is not None:
            self.queryset = self.queryset.filter(pk=pk)
        return self.queryset


class EntryFormView(ModelViewSet):
    queryset = EntryForm.objects.all()
    serializer_class = EntryFormSerializer
    parser_classes = [JSONParser]


def catchall_dev(request, upstream='http://localhost:3000'):
    upstream_url = upstream + request.path
    response = requests.get(upstream_url, stream=True)
    content_type = response.headers.get('Content-Type')

    if content_type == 'text/html; charset=UTF-8':
        return HttpResponse(
            content=engines['django'].from_string(response.text).render(),
            status=response.status_code,
            reason=response.reason,
        )

    else:
        return StreamingHttpResponse(
            streaming_content=response.iter_content(2 ** 12),
            content_type=content_type,
            status=response.status_code,
            reason=response.reason,
        )

catchall_prod = TemplateView.as_view(template_name='index.html')

catchall = catchall_dev if settings.DEBUG else catchall_prod