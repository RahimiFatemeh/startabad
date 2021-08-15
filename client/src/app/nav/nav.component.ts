import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Article } from '../_models/Article';
import { Course } from '../_models/Course';
import { AccountService } from '../_services/account.service';
import { ArticleService } from '../_services/article.service';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm! : FormGroup
  model : any = {}
  Articles$! : Observable<Article[]>
  Courses$! : Observable<Course[]>
  isLogin = false

  constructor(
    public accountService : AccountService ,
    private router : Router ,
    private toastr : ToastrService,
    private fb : FormBuilder , 
    private courseService : CourseService ,
    private articleService : ArticleService ,
    public ngxSmartModalService: NgxSmartModalService
    ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.getArticle()
    this.getCourses()
  }

  initializeForm()
  {
    this.loginForm = this.fb.group({
      username : ['' , [Validators.required , Validators.email]] ,
      password : ['' , Validators.required]
    })
  }
  get username()
  {
    return this.loginForm.get('username')
  }
  login() 
  {
    this.accountService.login(this.loginForm.value).subscribe(response => {
      this.isLogin = true
    })
  }

  logout() {
    this.isLogin = false
    this.accountService.logout();
    this.router.navigateByUrl("/")
  }

  // -------------------------------------
  // get articles
  getArticle()
  {
    this.Articles$ = this.articleService.getArticles()
  }
  // get courses
  getCourses()
  {
    this.Courses$ = this.courseService.getCourses()
  }
  // -------------------------------------

  ngAfterViewInit() {
    this.ngxSmartModalService.setModalData('' , 'popupOne');
  }
}
