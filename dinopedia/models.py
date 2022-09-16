from django.db import models

# Create your models here.
class Dinosaur(models.Model):
    reino = models.CharField(max_length=255)
    filo = models.CharField(max_length=255)
    clado = models.CharField(max_length=255)
    familia = models.CharField(max_length=255)
    subFamilia = models.CharField(max_length=255)
    genero = models.CharField(max_length=255)

class Category(models.Model):
    
