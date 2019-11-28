from django.urls import path

from . import views

app_name = 'fe_challenge'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('csv', views.CsvUploaderView.as_view(), name='csv'),
    path('form', views.ContactFormView.as_view(), name='form'),
    path('forms', views.ContactsPostListView.as_view(), name='forms'),
]