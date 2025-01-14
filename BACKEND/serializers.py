from rest_framework import serializers
from .models import Goal

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'
def validate_progress(self, value):
    # Check if this is an update (instance exists)
    if self.instance:  # Update case
        if value > self.instance.target:
            raise serializers.ValidationError("Progress cannot exceed the target.")
    else:  # Creation case
        target = self.initial_data.get('target')  # Get target from request data
        if target and value > int(target):  # Compare with target
            raise serializers.ValidationError("Progress cannot exceed the target.")
    return value
