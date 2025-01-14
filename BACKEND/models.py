from django.db import models

# Create your models here.
from django.db import models

class Goal(models.Model):
    name = models.CharField(max_length=200)
    target = models.IntegerField()
    progress = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

