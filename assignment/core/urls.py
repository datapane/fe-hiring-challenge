from django.conf.urls import url

from .views import HomeView, FileUploadView, EntryFormView
from .api_views import EntryFormAPIView

app_name = 'core'

urlpatterns = [
    # api urls
    url(r'^api/entry/$', EntryFormAPIView.as_view(), name='api-entry'),

    # django view urls
    url(r'^upload/$', FileUploadView.as_view(), name='upload'),
    url(r'^entry/$', EntryFormView.as_view(), name='entry'),
    url(r'^home/$', HomeView.as_view(), name='home'),
    url(r'', HomeView.as_view(), name='index'),
]
