from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *




@api_view(['GET'])
def getRoutes(request):
    return Response('Our API')


@api_view(['GET'])
def students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def careerOptions(request):
    careers = CareerOption.objects.all()
    serializer = CareerOptionSerializer(careers, many=True)
    return Response(serializer.data)
