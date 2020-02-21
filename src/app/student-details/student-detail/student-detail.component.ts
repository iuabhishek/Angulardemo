import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: []
})
export class StudentDetailComponent implements OnInit {

  constructor(private service: StudentDetailService) { }

  ngOnInit() {
    this.resetForn();
  }

  resetForn(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();    
    this.service.formData=
    {
      Stu_id:0,
      Phone:"",
      Name:'',
      City:'',
      Age:""

    }

  }
  onSubmit(form:NgForm)
  {
    debugger;
    if(this.service.formData.Stu_id==0)
    {
    this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form)
    }
    
  }

  insertRecord(form:NgForm)
  {
    this.service.postStudentDetails().subscribe(res=>{
      this.service.refreshList();
      this.resetForn(form);
      },err=>{
        console.log(err);
      })
  }

  updateRecord(form:NgForm)
  {
   
    this.service.putStudentDetails().subscribe(res=>{
      this.service.refreshList();
      this.resetForn(form);
    },err=>{
      console.log(err);
    });

  }

  

}
