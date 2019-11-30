from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index),
    path('upload/', views.FileUploadView.as_view({'get': 'list', 'post': 'create'})),
    path('entry/', views.EntryFormView.as_view({'get': 'list', 'post': 'create'}))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
