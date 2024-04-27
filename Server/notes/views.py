from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from .models import Note
# Create your views here.

class CreateNote(CreateView):
  model = Note

class UpdateNote(UpdateView):
  model = Note
  
def ListNotes(request):
  notes = Note.objects.all()
  
  notes = serializers.serialize('json', notes)
  print(notes)
  # return HttpResponse(notes, content_type='application/json')
  return JsonResponse(notes,safe=False)
  # return render(request, 'notes/note_list.html', {'notes': notes})

# class ListNotes(ListView):
#   model = Note
#   context_object_name = 'notes'
  