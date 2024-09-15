from rest_framework import serializers
from .models import FruitFaq, Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
class FruitFaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = FruitFaq
        fields = '__all__'