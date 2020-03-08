#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from notesapi.views import NotesViewSet

router = routers.DefaultRouter()
router.register(r'notes', NotesViewSet)

urlpatterns = [
    path(r'', include(router.urls))
]
