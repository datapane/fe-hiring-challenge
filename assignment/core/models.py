from django.db import models

# Create your models here.
class EntryFormModel(models.Model):
    name = models.CharField(max_length=100, null=False)
    age = models.PositiveIntegerField(null=False)
    email = models.EmailField(null=False)
