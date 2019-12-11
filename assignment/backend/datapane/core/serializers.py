from rest_framework import serializers
from .models import FileUpload, EntryForm

class FileUploadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FileUpload
        fields = ['id', 'csvfile']
    

class EntryFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryForm
        fields = '__all__'