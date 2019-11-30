from django.shortcuts import render

from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action

from .models import FileUpload, EntryForm
from .serializers import FileUploadSerializer, EntryFormSerializer


# Create your views here.
def index(request):
    return render(request, 'base.html')


class FileUploadView(ModelViewSet):
    queryset = FileUpload.objects.all()
    serializer_class = FileUploadSerializer
    parser_classes = (MultiPartParser, FormParser,)

    def perform_create(self, serializer):
        serializer.save(csvfile=self.request.data.get('csvfile'))


class EntryFormView(ModelViewSet):
    queryset = EntryForm.objects.all()
    serializer_class = EntryFormSerializer
    parser_classes = (FormParser)

    def perform_create(self, serializer):
        serializer.save(
            email=self.request.data.get('email'),
            name=self.request.data.get('name'),
            age=self.request.data.get('age')
        )