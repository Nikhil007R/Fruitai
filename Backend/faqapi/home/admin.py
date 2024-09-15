from django.contrib import admin
from .models import Person, FruitFaq
# Register your models here.
admin.site.register(Person)
admin.site.register(FruitFaq)

# put that in web browser