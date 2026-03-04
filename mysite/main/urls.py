# urls.py
from django.urls import path
from . import views

#adding urls for map and home page
urlpatterns = [
    path('', views.map, name='home'),
    path('map/', views.map, name='map'),
]