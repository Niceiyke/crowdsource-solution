from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from .models import Solution,Vote


@receiver(pre_save,sender=Vote)
def update_vote_count( instance, **kwargs):    
        qs =Solution.objects.filter(id=instance.solution.id).first()
        qs.votes+=1
        qs.save()
        