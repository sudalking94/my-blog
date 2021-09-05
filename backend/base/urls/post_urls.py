from django.urls import path
from base.views import post_views as views

urlpatterns = [
   path("", views.getPosts, name="posts"),   
   path("mainposts/",views.getMainPosts,name="main-posts"),
   path("<int:pk>/", views.getPostById, name="post"),
]
