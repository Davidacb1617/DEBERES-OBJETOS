from django.contrib import admin
from django.urls import path
from hola_mundo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index')
]
