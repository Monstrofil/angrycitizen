# Generated by Django 3.1.7 on 2021-03-02 17:19

from django.db import migrations, models
import django_fsm


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', django_fsm.FSMIntegerField(choices=[(0, 'draft'), (1, 'ready'), (2, 'waiting_for_the_answer')], default=0)),
            ],
        ),
    ]
