from django.urls import path
from base.views import post_views as views

urlpatterns = [
   path("", views.getPosts, name="posts"),
   path("popular/", views.getPopularPosts, name="popular"),
   path("<int:pk>/", views.getPostById, name="post"),
]
