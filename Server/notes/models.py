from django.db import models

# Create your models here.
class Note(models.Model):
  title = models.CharField(max_length= 50, blank=False)
  content = models.TextField(max_length=2000, blank=False)
  created = models.DateTimeField(auto_now_add= True)
  updated = models.DateTimeField(auto_now=True)
  
  def __str__(self) -> str:
    return self.title
  