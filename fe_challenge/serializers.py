from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()

    def create(self, validated_data):
        return Contact.objects.create(**validated_data)
