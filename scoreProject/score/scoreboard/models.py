from django.db import models

# Create your models here.
class Gamer(models.Model):
    user = models.CharField(max_length=30, blank=True, unique=True)
    score = models.IntegerField(null=True)