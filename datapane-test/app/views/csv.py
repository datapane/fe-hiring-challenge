from django.http import HttpResponse, FileResponse
from django.views.generic import TemplateView, ListView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.core.files.storage import FileSystemStorage

UPLOAD_DIRECTORY = 'uploads/'

@method_decorator(csrf_exempt, name='dispatch')
class CSVUploaderView(TemplateView):
    template_name = "csv_upload.html"

    def get_upload_dir(self, file_name):
        return UPLOAD_DIRECTORY+file_name

    def post(self, request, *args, **kwargs):
        if request.FILES.get('file'):
            uploaded_file = request.FILES.get('file')
            fs = FileSystemStorage()

            filename = fs.save(self.get_upload_dir(uploaded_file.name), uploaded_file)
            return FileResponse(open(filename, 'rb'))
        return HttpResponse("no file included in the request")