from django.views import generic, View
from django.forms.models import model_to_dict
from rest_framework import generics

from .models import Contact
from .serializers import ContactSerializer


class ReactMixin(object):
    template_name = 'base.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ReactMixin, self).get_context_data(*args, **kwargs)
        context["react_props"] = self.get_react_props(context)
        context["page_name"] = self.get_page_name()
        context["title"] = self.get_title()
        return context

    def get_react_props(self, context):
        raise NotImplementedError()

    def get_page_name(self, context):
        raise NotImplementedError()

    def get_title(self):
        raise NotImplementedError()


class IndexView(ReactMixin, generic.ListView):
    queryset = "Index View"

    def get_react_props(self, context):
        return {"data": ""}

    def get_page_name(self):
        return "main"

    def get_title(self):
        return "Lorem Ipsum"


class CsvUploaderView(ReactMixin, generic.ListView):
    queryset = "CSV"

    def get_react_props(self, context):
        return {"data": ""}

    def get_page_name(self):
        return "csv"

    def get_title(self):
        return "CSV Upload"


class ContactFormView(ReactMixin, generic.ListView):
    queryset = "Form"

    def get_react_props(self, context):
        return {"data": ""}

    def get_page_name(self):
        return "form"

    def get_title(self):
        return "Contact Form"


class ContactsPostListView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
