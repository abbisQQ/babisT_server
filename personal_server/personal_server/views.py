from django.shortcuts import render
from django.http import HttpResponse


def home_page(request):
    return render(request, "home.html", {})


def tribute_page(request):
    return render(request, 'tribute.html', {})


def calculator_page(request):
    return render(request, 'calculator.html', {})


def portfolio_page(request):
    return render(request, 'portfolio.html', {})


def tic_tac_toe(request):
    return render(request, "tic-tac-toe.html", {})


def wiki_page(request):
    return render(request, "wiki.html", {})


def simons_game_page(request):
    return render(request, "simon.html", {})


def generator_page(request):
    return render(request, "generator.html")


def weather_page(request):
    return render(request, "weather.html")
