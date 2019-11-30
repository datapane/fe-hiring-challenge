"""datapane URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from app.views.home import HomeView

from app.views.user_detail import UserFormView, user_detail_upload

from app.views.csv import CSVUploaderView



urlpatterns = [
    path('', HomeView.as_view(), name="home"),
    path('user_details/', UserFormView.as_view(), name="user_details"),
    path('csv_upload/', CSVUploaderView.as_view(), name="csv_uploader"),
    path('api/user-detail', user_detail_upload, name="submit_user_detail"),
]