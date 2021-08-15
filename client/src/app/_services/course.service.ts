import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../_models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses : Course[] = [] 
  baseUrl = environment.apiUrl

  constructor(private http : HttpClient) { 
  }

  getCourses()
  {
    if(this.courses.length) return of(this.courses)
    return this.http.get<Course[]>(this.baseUrl + 'courses').pipe(
      map(course => {
        this.courses = course
        return course
      })
    )
  }
  Add(model : Course)
  {
    return this.http.post<Course>(this.baseUrl + 'courses' , model).pipe(
      map(response => {
        this.courses.push(response)
        // console.log(this.articles)
        // this.getArticles()
      })
    )
  }

  update(course : Course)
  {
    return this.http.put(this.baseUrl + 'courses' , course)
  }
  
  delete(id : number)
  {
    const Index = this.courses.findIndex(x=> x.id === id)
    if(Index != -1){
      this.courses.splice(Index , 1)
    }
    return this.http.delete(this.baseUrl + 'courses/' + id)
  }

}
