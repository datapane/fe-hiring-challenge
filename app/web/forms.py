from django import forms
from django.core import validators

from web.models import Entry


class EntryForm(forms.ModelForm):
    name = forms.CharField(required=True, max_length=30)
    age = forms.IntegerField(required=True,
                             validators=[
                                 validators.MinValueValidator(limit_value=0)])
    email = forms.EmailField(required=True)

    class Meta:
        model = Entry
        exclude = ["id"]
