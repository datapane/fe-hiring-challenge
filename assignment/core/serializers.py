from rest_framework import serializers

from .models import EntryFormModel


class EntryFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryFormModel
        fields = '__all__'
