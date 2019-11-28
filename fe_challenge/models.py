from django.db import models


class Contact(models.Model):
    email = models.EmailField()
    age = models.IntegerField()
    name = models.CharField(max_length=100)
