from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from account.models import UserProfile
from main.models import Problem,Solution,Vote,Comment
from .models import Point

@receiver(post_save,sender=Problem)
def update_point_for_new_problem(sender,instance,created,**kwargs):
    Problem_Point =10
    if created:

         Point.objects.create(earn_by=instance.created_by,point =Problem_Point,action =f'problem: {instance.title}')

         qs=UserProfile.objects.filter(id=instance.created_by.id).first()
         qs.total_point+=Problem_Point
         qs.save()

@receiver(post_save,sender=Solution)
def update_point_for_new_solution(sender,instance,created,**kwargs):
    Solution_Point =20
    if created:

         Point.objects.create(earn_by=instance.created_by,point =Solution_Point,action =f'giving solution to : {instance.problem.title}')

         qs=UserProfile.objects.filter(id=instance.created_by.id).first()
         qs.total_point+=Solution_Point
         qs.save()

@receiver(post_save,sender=Vote)
def update_point_for_new_vote(sender,instance,created,**kwargs):
    Vote_Point=5
    if created:

         Point.objects.create(earn_by=instance.voted_by,point =Vote_Point,action =f'for voting: {instance.solution.problem.title}')
         
         qs=UserProfile.objects.filter(id=instance.voted_by.id).first()
         qs.total_point+=Vote_Point
         qs.save()

@receiver(post_save,sender=Comment)
def update_point_for_new_comment(sender,instance,created,**kwargs):
    Comment_Point=10
    if created:

         Point.objects.create(earn_by=instance.created_by,point =Comment_Point,action =f'for commenting: {instance.solution.problem.title}')
         
         qs=UserProfile.objects.filter(id=instance.created_by.id).first()
         qs.total_point+=Comment_Point
         qs.save()      