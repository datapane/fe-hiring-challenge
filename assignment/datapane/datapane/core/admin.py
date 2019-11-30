from django.contrib import admin

# Register your models here.
from .models import FileUpload

admin.site.register(FileUpload)