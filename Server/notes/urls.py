from django.urls import path
from . import views


urlpatterns = [
  # path('', views.ListNotes.as_view()),
  path('', views.ListNotes),
  # path(),
  # path('add/', views.CreateNote.as_view()),
  # path('list/', views.ListNotes.as_view()),
]