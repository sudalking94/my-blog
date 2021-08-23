from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Category
from base.serializers import CategorySerializer

@api_view(["GET"])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response({
        "categories": serializer.data
    })