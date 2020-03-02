#!/usr/bin/env python
# -*- coding: utf-8 -*-

from .base import * 
DEBUG = False
ALLOWED_HOSTS += ['http//yourname.com']
WSGI_APPLICATION = 'project.wsgi.prod.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db_name',
        'USER': 'db_user',
        'PASSWORD': 'db_password',
        'HOST': 'localhost',
        'PORT': '',
    }
}

AUTH_PASSWORD_VALIDATOR = [
    {'NAME': 'django.contrib.auth.password_validation.USER'}
]
