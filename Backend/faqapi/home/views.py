from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PersonSerializer, FruitFaqSerializer
from .models import Person, FruitFaq

# Create your views here.
# @api_view(['GET','POST', 'DELETE', 'PATCH', 'PUT'])
# def index(request):
#
#     if request.method == 'GET':
#         print("its a get request")
#         # print(request.GET.get('search'))
#         # print(Person.objects.get(age = 20).name)
#         # print(Person.objects.get(age = 20).age)
#         obj = Person.objects.all()
#         serializer = PersonSerializer(obj, many = True)
#
#         return Response(serializer.data)

    # elif request.method =='POST':
    #     print("its a psot request")
    #     data2 = request.data
    #
    #     print(request.data)
    #     person = Person()
    #     person.name = data2["name"]
    #     person.age = data2["age"]
    #     person.save()
    #
    #     obj = {
    #         "name": person.name,
    #         "age": person.age
    #     }
    #
    #     return Response(obj)

    # elif request.method == 'POST':
    #     data = request.data
    #     serializer = PersonSerializer(data = data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    #
    # elif request.method == 'PUT':
    #     data = request.data
    #     serializer = PersonSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    #
    # elif request.method == 'PATCH':
    #     data = request.data
    #     obj = Person.objects.get(id=data['id'])
    #     serializer = PersonSerializer(obj, data=data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    #
    # else:
    #     data = request.data
    #     obj = Person.objects.get(id=data['id'])
    #     obj.delete()
    #     return Response({'message': 'person deleted'})


from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.

class FruitFaqViewSet(viewsets.ModelViewSet):
    queryset = FruitFaq.objects.all()
    serializer_class = FruitFaqSerializer