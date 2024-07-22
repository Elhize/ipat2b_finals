from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=150, null=True)
    email = models.CharField(max_length=150, null=True)
    phone = models.CharField(max_length=100, null=True)
    birthday = models.DateField(default='2000-01-01', null =True)
    gender = models.CharField(max_length=150, null=True)
    civil_status = models.CharField(max_length=100, null= True)
    height = models.CharField(max_length=100, null= True)
    weight = models.CharField(max_length=100, null= True)
    blood_type = models.CharField(max_length=100, null= True)
    citizenship = models.CharField(max_length=100, null= True)
    gsis_id = models.CharField(max_length=100, null= True)
    pagibig_id = models.CharField(max_length=100, null= True)
    philhealth_id = models.CharField(max_length=100, null= True)
    sss_no = models.CharField(max_length=100, null= True)
    tin_no = models.CharField(max_length=100, null= True)
    agency_employee_no = models.CharField(max_length=100, null= True)
    spouses_name = models.CharField(max_length=100, null= True)
    fathers_name = models.CharField(max_length=100, null= True)
    mothers_name = models.CharField(max_length=100, null= True)
    elementary_school = models.CharField(max_length=100, null= True)
    secondary_school = models.CharField(max_length=100, null= True)
    college_school = models.CharField(max_length=100, null= True)
    graduate_studies = models.CharField(max_length=100, null= True)

    def __str__(self) -> str:
        return super ().__str__()
