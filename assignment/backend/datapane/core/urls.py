from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index),
    path('loremipsum/', views.loremipsum),
    path('upload/', views.FileUploadView.as_view({'get': 'list', 'post': 'create'})),
    path('entry/', views.EntryFormView.as_view({'get': 'list', 'post': 'create'})),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Important this line outside of the original urlpatterns.
urlpatterns += re_path(r'', views.catchall),