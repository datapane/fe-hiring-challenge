import os

import pandas as pd
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.views.generic import View

from .forms import FileUploadForm


class HomeView(View):
    template_name = 'core/home.html'

    def get(self, request, *args, **kwargs):
        if request.GET.get('ic-request'):
            self.template_name = 'core/home_content.html'
        return TemplateResponse(template=self.template_name, request=request)


class FileUploadView(View):
    template_name = 'core/upload.html'
    form_class = FileUploadForm

    def get(self, request, *args, **kwargs):
        context = {}
        if request.GET.get('ic-request'):
            self.template_name = 'core/upload_form.html'
        if 'file_path' in request.session and os.path.exists(request.session.get('file_path')):
            data = pd.read_csv(request.session.get('file_path'))
            context['df_table'] = data.to_html(escape=True,
                                               classes=["table-bordered", "table-striped", "table-hover",
                                                        "table-responsive"])
        return render(request, self.template_name, {'form': self.form_class, **context})

    def post(self, request, *args, **kwargs):
        context = {}
        if request.FILES.get('file'):
            # using FileSystemStorage to keep things simple for demonstration
            file = request.FILES.get('file')
            fs = FileSystemStorage()
            file_path = fs.save(file.name, file)
            data = pd.read_csv(file_path)
            request.session['file_path'] = file_path
        context['df_table'] = data.to_html(escape=True,
                                           classes=["table-bordered", "table-striped", "table-hover",
                                                    "table-responsive"])
        return render(request, 'core/csv_table.html', context)


class EntryFormView(View):
    template_name = 'core/entry_form.html'

    def get(self, request, *args, **kwargs):
        if request.GET.get('ic-request'):
            self.template_name = 'core/entry_form_content.html'
        return TemplateResponse(template=self.template_name, request=request)
