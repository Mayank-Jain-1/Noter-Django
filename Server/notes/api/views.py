from .serializers import NoteSerializer
from ..models import Note
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

class ListCreateNote(ListCreateAPIView):
  queryset = Note.objects.all()
  serializer_class = NoteSerializer
  
class DetailUpdateDeleteNote(RetrieveUpdateDestroyAPIView):
  queryset = Note.objects.all()
  serializer_class = NoteSerializer
