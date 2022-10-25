from asyncore import read
from rest_framework import serializers
from ..models import Dinosaur

class DinosaurSerializer(serializers.ModelSerializer):
    
    image = serializers.ImageField(required=True)

    class Meta:
        model = Dinosaur
        fields = [
            'image',
            'name',
            'species',
            'feeding_habit',
            'height',
            'length',
            'weight',
            'region',
            'short_description',
            'description']