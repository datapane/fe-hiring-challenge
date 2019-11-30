from django.db import models
from django.core.validators import validate_email


class UserDetail(models.Model):
    """A model for details entered by users"""
    name = models.CharField(max_length=50)
    age = models.PositiveIntegerField()
    email = models.CharField(validators=[validate_email],max_length=50)

    def __str__(self):
        return f"<{self.name} {self.age}>"