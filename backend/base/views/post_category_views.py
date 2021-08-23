from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.serializers import PostCategorySerializer
from base.models import PostCategory

@api_view(["GET"])
def getPostCategories(request):
    postCategories = PostCategory.objects.all()        
    serializer = PostCategorySerializer(postCategories, many=True)
    return Response(
        {"post-category": serializer.data}
    )