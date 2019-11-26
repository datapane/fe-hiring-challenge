from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "index.html"


class EntryFormView(TemplateView):
    template_name = "entries.html"


class CSVUploaderView(TemplateView):
    template_name = "csv_upload.html"
