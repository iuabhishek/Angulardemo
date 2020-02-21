import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import {HttpClient} from '@angular/common/http'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
 formData:StudentDetail;
 list:StudentDetail[];
  constructor(private http:HttpClient) { }
  readonly baseUrl='http://localhost:50313/api';

  postStudentDetails()
  {
    return this.http.post(this.baseUrl+'/Students',this.formData);
  }

  
  putStudentDetails()
  {
    return this.http.put(this.baseUrl+'/Students/'+this.formData.Stu_id,this.formData);
  }

  refreshList()
  {
     this.http.get(this.baseUrl+'/Students').toPromise()
     .then(res=>this.list=res as StudentDetail[])
  }
  deleteRecord(Stu_id)
  {
    return this.http.delete(this.baseUrl+'/Students/'+Stu_id);
  }
}
