import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../_models/Course';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses$! : Observable<Course[]>

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.Courses$ = this.courseService.getCourses()
  }

  Search(){
    
  }

}
