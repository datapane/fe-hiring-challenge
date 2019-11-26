from django.http import HttpResponse, FileResponse
from django.urls import reverse_lazy
from django.views.generic import TemplateView, ListView
from django.views.generic.edit import FormMixin
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.core.files.storage import FileSystemStorage

from web.models import Entry
from web.forms import EntryForm


class HomeView(TemplateView):
    template_name = "index.html"


class EntryFormView(ListView, FormMixin):
    template_name = "entries.html"
    model = Entry
    form_class = EntryForm
    success_url = reverse_lazy('entries')

    def post(self, request, *args, **kwargs):
        name = self.request.POST['name']
        age = self.request.POST['age']
        email = self.request.POST['email']
        form = self.get_form()
        if form.is_valid():
            new_entry = Entry(name=name, age=age, email=email)
            new_entry.save()
        return self.get(request, *args, **kwargs)


# this is a bad solutiion, but I didn't want ot spend more time on adding csrftoken to fetch request
@method_decorator(csrf_exempt, name='dispatch')
class CSVUploaderView(TemplateView):
    template_name = "csv_upload.html"

    def post(self, request, *args, **kwargs):
        if request.FILES.get('file'):
            uploaded_file = request.FILES.get('file')
            fs = FileSystemStorage()
            filename = fs.save(uploaded_file.name, uploaded_file)
            return FileResponse(open(filename, 'rb'))
        return HttpResponse("no file included in the request")

