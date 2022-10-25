from asyncore import read
from rest_framework import serializers
from ..models import Dinosaur
from ..models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class DinosaurSerializer(serializers.ModelSerializer):
    
    image = serializers.ImageField(required=True)

    class Meta:
        model = Dinosaur
        fields = [
            'image',
            'name',
            'species',
            'category',
            'feeding_habit',
            'height',
            'length',
            'weight',
            'country',
            'region',
            'description']