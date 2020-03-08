#!/usr/bin/env python
# -*- coding: utf-8 -*-
from rest_framework import serializers
from users.models import Users


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ['id', 'email', 'first_name', 'last_name', 'spouse_name', 'date_of_birth', 'profile_picture']
