from django.views.generic import TemplateView, ListView

class HomeView(TemplateView):
    template_name = "index.html"