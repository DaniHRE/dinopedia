from django.db import models
from stdimage import StdImageField

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Dinosaur(models.Model):
    image = StdImageField(upload_to=upload_to, blank=False, null=False)
    name = models.CharField(max_length=255)
    species = models.CharField(max_length=255, blank=False, null=False)
    feeding_habit = models.CharField(max_length=255, blank=False, null=False)
    height = models.CharField(max_length=255, blank=False, null=False)
    length = models.CharField(max_length=255, blank=False, null=False)
    weight = models.CharField(max_length=255, blank=False, null=False)
    region = models.CharField(max_length=255, blank=False, null=False)
    short_description = models.TextField(max_length=510, blank=False, null=False)
    description = models.TextField(max_length=1024, blank=False, null=False)

    class Meta:
        managed = True
        db_table = 'dinosaur'

    def __str__(self) -> str:
        return self.nome
