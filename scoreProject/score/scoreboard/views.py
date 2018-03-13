from django.shortcuts import render
from .models import Gamer
from .serializers import GamerSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

from django.http import HttpResponse

def index(request):
    try:
        first=Gamer.objects.order_by('-score')[0]
        existFirst=True
        try:
            second=Gamer.objects.order_by('-score')[1]
            existSecond=True
            try:
                third=Gamer.objects.order_by('-score')[2]
                existThirt=True
                try:
                    last=Gamer.objects.order_by('-score')[3:10]
                    existLast=True
                except:
                    existLast=False
            except:
                existThirt=False
        except:
            existSecond=False
    except :
        existFirst=False
   
    return render(request, 'scoreboard/latest.html', locals())
    

@api_view(['GET', 'POST'])
def GamerList(request):
    if request.method == 'GET':
        tasks = Gamer.objects.all()
        serializer = GamerSerializer(tasks, many=True)
        print(serializer.data)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GamerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def GamerDetail(request, pk):
    try:
        task = Gamer.objects.get(pk=pk)
    except Gamer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GamerSerializer(task)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GamerSerializer(task, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


