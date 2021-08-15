import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../_models/Course';
import { BasketService } from '../_services/basket.service';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  Courses$! : Observable<Course[]>

  constructor(private courseService: CourseService , private baskeService:BasketService) { }

  ngOnInit(): void {
    this.Courses$ = this.courseService.getCourses()
  }

  addToCart(item:any)
  {
    this.baskeService.addItemToBasket(item)
  }

  removeFromCart(id:number)
  {
    this.baskeService.removeItemFromBasket(id)
  }
  
  changestatus(id:number)
  {

  }

}
