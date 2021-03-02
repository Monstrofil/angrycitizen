from django.contrib import admin

from api.models import Issue
from django_fsm_log.admin import StateLogInline
from fsm_admin.mixins import FSMTransitionMixin


class IssueModelAdmin(FSMTransitionMixin, admin.ModelAdmin):
    # the name of one or more FSMFields on the model to transition
    fsm_field = ['state', ]
    # for pretty view of transitions list
    inlines = [StateLogInline]


admin.site.register(Issue, IssueModelAdmin)
