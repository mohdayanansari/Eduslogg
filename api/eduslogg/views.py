from django.db.models import manager
from django.db.models.fields.related import ManyToManyField
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import *
from .serializers import *
from .forms import *



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

@api_view(['GET'])
def institutes(request):
    institutes = Institute.objects.all()
    serializer = InstituteSerializer(institutes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def blogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def queryForm(request):
	serializer = QuerySerialzer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['GET'])
def query(request):
    queries = Query.objects.all()
    serializer = QuerySerialzer(queries, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def category(request):
    categories = CareerCategory.objects.all()
    serializer = CategorySerializer(categories, many=True)

    return Response(serializer.data)