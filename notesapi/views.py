from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Notes
from .serializers import NotesSerializer

class NotesViewSet(viewsets.ModelViewSet):
    serializer_class = NotesSerializer
    queryset = Notes.objects.all()
    permission_classes = (IsAuthenticated,)
    ordering_fields = ['created',]
    search_fields = [
        'title',
    ]
    filterset_fields = [
        'is_draft'
    ]

    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        notes = self.get_object()
        notes.is_draft = False
        notes.save()

        return Response(self.get_serializer(counter, man=False).data)

