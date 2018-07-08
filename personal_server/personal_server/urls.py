"""personal_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from django.contrib import admin
from .views import home_page, tribute_page, calculator_page, portfolio_page, tic_tac_toe, wiki_page, simons_game_page, generator_page, weather_page

urlpatterns = [
    url(r'^$', home_page),
    url(r'^tribute/$', tribute_page),
    url(r'^calculator/$', calculator_page),
    url(r'^ttt', tic_tac_toe),
    url(r'^wiki', wiki_page),
    url(r'^weather', weather_page),
    url(r'^generator', generator_page),
    url(r'^simon', simons_game_page),
    url(r'^portfolio/$', portfolio_page),
    url(r'^admin/', admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)