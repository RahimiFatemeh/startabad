import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../_services/course.service';
import { GroupService } from '../_services/group.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addForm! : FormGroup
  public response!: {dbPath: ''}
  groups!:any
  number:any
  addCourseClick=false 

  constructor(
    private courseService: CourseService , 
    private groupService : GroupService , 
    private fb : FormBuilder ,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.getGroup()
  }

  addCourse()
  {  
    if(this.response){
    this.addForm.patchValue({
      movie: this.response.dbPath });
    }
    this.courseService.Add(this.addForm.value).subscribe(()=>{
      this.toastr.success("با موفقیت اضافه شد")
    })
  }   

  initializeForm(){
    this.addForm = this.fb.group ({
      title : [''],
      price : [''] ,
      nubmerOfSession : ['' ] , 
      instructor : [''] ,
      description : [''] ,  
      movie : ['']
    })
  }

  uploadFinished(event:any){
    this.response = event
  }

  getGroup(){
    this.groupService.getGroup().subscribe(response => {
      this.groups = response
    })
  }
  addCourseItem()
  {
    this.addCourseClick=true
  }
  changeGroup(event : any)
  {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }

}
