from rest_framework import serializers
from ..models import Dinosaur
from ..models import Category

class DinosaurSerializer(serializers.ModelSerializer):
    
    image = serializers.ImageField(required=True)
    
    class Meta:
        model = Dinosaur
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


