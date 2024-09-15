from django.db import models

# Create your models here.

# Class Person is inheriting from models.Model 
class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

class FruitFaq(models.Model):
    fruit = models.CharField(max_length=100)
    question = models.CharField(max_length=200)
    faq = models.CharField(max_length=1000)
    img_url = models.CharField(max_length=150)