from django.urls import path
from base.views import post_views as views

urlpatterns = [
   path("", views.getPosts, name="posts"),
   path("<int:pk>/", views.getPostById, name="post"),
]
