from django.urls import reverse_lazy
from django.views.generic import TemplateView, ListView
import json
from app.models.userdetail import UserDetail
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from django.http import JsonResponse

@method_decorator(csrf_exempt, name='dispatch')
class UserFormView(ListView):
    template_name = "user_details.html"
    model = UserDetail
    success_url = reverse_lazy('user_details')

    def get(self, request, *args, **kwargs):
        self.object = UserDetail.objects.all()
        return super().get(request, *args, **kwargs)

def user_detail_upload(request):
    if request.method == 'POST':
        request_json = json.loads(request.body.decode('utf-8'))
        print(request_json)
        try:
            name = request_json['name']
            age = request_json['age']
            email = request_json['email']
            new_user = UserDetail(name=name, age=age, email=email)
            new_user.save()
            return JsonResponse(json.dumps(new_user))
        except:
            error = dict()
            error['error'] ="Error saving user details"
            error['errorCode'] ="USER_SAVE_ERROR"
            return JsonResponse(error)

