from django.core import paginator
from django.db.models import Count
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.serializers import PostSerializer,PostsSerializer, MainPostsSerializer
from base.models import Post

@api_view(["GET"])
def getPosts(request):
    search = request.query_params.get("search")
    if search ==None:
        search =""
    try:
        categoryId = int(request.query_params.get("category"))
    except (ValueError,TypeError):
        categoryId = None
    page = request.query_params.get("page")    
    if categoryId is not None:
        posts = Post.objects.filter(category=categoryId)
    else:
        posts = Post.objects.filter(title__icontains=search)
    paginator = Paginator(posts,5)
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        posts = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        posts = paginator.page(page)
    serializer = PostsSerializer(posts, many=True)
    return Response(
        {"posts": serializer.data,"page":page,"pages":paginator.num_pages}
    ) 

@api_view(["GET"])
def getPostById(request, pk):
    post = Post.objects.get(_id=pk)
    serializer = PostSerializer(post, many=False)    
    return Response(
        {"post":serializer.data}
    )

@api_view(["GET"])
def getMainPosts(request):
    try:
        categoryId = int(request.query_params.get("category"))
    except (ValueError,TypeError):
        categoryId = None
    if categoryId is not None:
        posts = Post.objects.filter(category=categoryId)
    else:
        posts = Post.objects.all()
    serializer = MainPostsSerializer(posts,many=True)
    return Response(
        {"posts":serializer.data[:4]}
    )