from django.urls import path
from . import views


urlpatterns = [
  path('', views.ListCreateNote.as_view(), name='notes.listcreate'),
  path('<int:pk>', views.DetailUpdateDeleteNote.as_view(), name='notes.detail'),
]