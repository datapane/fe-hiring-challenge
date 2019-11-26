from django.urls import reverse_lazy
from django.views.generic import TemplateView, ListView
from django.views.generic.edit import FormMixin

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


class CSVUploaderView(TemplateView):
    template_name = "csv_upload.html"
