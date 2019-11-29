from django import forms


class FileUploadForm(forms.Form):
    file = forms.FileField(label='Select a CSV file', widget=forms.FileInput(attrs={'accept': '.csv'}))
