from django.db import models
from django_fsm import FSMIntegerField, transition


class Issue(models.Model):
    """
    Describes single problem.

    Single issue may contain multiple photos in some range
    (e.g. when there are many potholes on some location)
    """
    STATUS_DRAFT = 0
    STATUS_READY = 1
    STATUS_WAITING_FOR_ANSWER = 2
    STATUS_CHOICES = (
        (STATUS_DRAFT, 'draft'),
        (STATUS_READY, 'ready'),
        (STATUS_WAITING_FOR_ANSWER, 'waiting_for_the_answer'),
    )

    state = FSMIntegerField(default=STATUS_DRAFT, choices=STATUS_CHOICES)

    @transition(field=state, source=STATUS_DRAFT, target=STATUS_READY)
    def publish(self):
        pass

    @transition(field=state, source=STATUS_READY, target=STATUS_WAITING_FOR_ANSWER)
    def send(self):
        pass
