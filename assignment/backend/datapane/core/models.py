from django.db import models
from django.core.validators import FileExtensionValidator

# Create your models here.
def get_file_path(instance, filename):
    return '{}'.format(filename)

class FileUpload(models.Model):
    csvfile = models.FileField('CSV file', upload_to=get_file_path, validators=[FileExtensionValidator(['csv'])])
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)


class EntryForm(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=200)
    age = models.PositiveIntegerField()