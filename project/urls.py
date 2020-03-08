from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('rest_auth.urls')),
    url(r'^api/register/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
    path('notesapi/', include('notesapi.urls'))
]

if settings.DEBUG: # new
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
