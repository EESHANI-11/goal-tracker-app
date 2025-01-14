from rest_framework import viewsets
from django.http import JsonResponse, HttpResponse
import json
from django.utils.timezone import now
from datetime import timedelta
from .models import Goal
from .serializers import GoalSerializer

# Goal ViewSet
class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer

def weekly_report(request):
    today = now()
    start_of_week = today - timedelta(days=today.weekday())
    end_of_week = start_of_week + timedelta(days=6)

    goals = Goal.objects.filter(
        created_at__date__gte=start_of_week.date(),
        created_at__date__lte=end_of_week.date()
    )

    report = []
    for goal in goals:
        completion = round((goal.progress / goal.target) * 100, 2)
        status = 'Achieved' if goal.progress >= goal.target else 'Pending'
        report.append({
            'name': goal.name,
            'target': goal.target,
            'progress': goal.progress,
            'completion': f"{completion}%",
            'status': status
        })

    if request.GET.get('download') == 'true':
        response = HttpResponse(
            json.dumps(report, indent=4),
            content_type='application/json'
        )
        response['Content-Disposition'] = 'attachment; filename="weekly_report.json"'
        return response

    return JsonResponse({'report': report})
