from django.db import models


class Entry(models.Model):
    """A model which will contain the entries entered by users"""
    name = models.CharField(max_length=30)
    age = models.PositiveIntegerField()
    email = models.CharField(max_length=40)

    def __str__(self):
        return f"<{self.name} {self.age}>"
