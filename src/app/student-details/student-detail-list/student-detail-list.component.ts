import { Component, OnInit } from '@angular/core';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { NgForm } from '@angular/forms';
import { StudentDetail } from 'src/app/shared/student-detail.model';

@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styles: []
})
export class StudentDetailListComponent implements OnInit {

  constructor(private service:StudentDetailService) { }

  ngOnInit() {
   
    this.service.refreshList();
  }

  LoadData(data:StudentDetail)
  {
    this.service.formData=Object.assign({},data);
  }
  deleteRecords(Stu_id)
  {
    if(confirm('Are you sure to delete record?'))
    {
    this.service.deleteRecord(Stu_id).subscribe(res=>{
      this.service.refreshList();
    },err=>{console.log(err)})
  }
  }

}
