from django.db import models
from stdimage import StdImageField

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# Create your models here.
class Category(models.Model):
    nomeCategoria = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'category'

    def __str__(self) -> str:
        return self.nomeCategoria

class Dinosaur(models.Model):
    nome = models.CharField(max_length=255)
    reino = models.CharField(max_length=255, blank=False, null=False)
    filo = models.CharField(max_length=255, blank=False, null=False)
    clado = models.CharField(max_length=255, blank=False, null=False)
    familia = models.CharField(max_length=255, blank=False, null=False)
    subFamilia = models.CharField(max_length=255, blank=False, null=False)
    genero = models.CharField(max_length=255, blank=False, null=False)
    image = StdImageField(upload_to=upload_to, blank=False, null=False)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='categories', blank=False, null=False)

    class Meta:
        managed = True
        db_table = 'dinosaur'

    def __str__(self) -> str:
        return self.nome
