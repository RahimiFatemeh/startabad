import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiminArticleEditComponent } from './admin/admin-article-edit/admin-article-edit.component';
import { AdminArticleAddComponent } from './admin/admin-article-add/admin-article-add.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGroupComponent } from './admin/admin-group/admin-group.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path : 'register' , component: RegisterComponent} , 
  {path: 'nav' , component: NavComponent} , 
  {path : 'admin/article/edit/:id' , component: AdiminArticleEditComponent} ,
  {path : 'admin/article/add' , component: AdminArticleAddComponent} ,
  {path : 'admin/course/add' , component: AddCourseComponent} ,
  {path : 'admin/article' , component: AdminArticleComponent} ,
  {path : 'admin/course' , component: CoursesComponent} ,
  {path : 'admin/group/add' , component: AdminGroupComponent} ,
  {path : 'admin/dashboard' , component: AdminDashboardComponent} ,
  {path : 'courses' , component: CoursesListComponent} ,
  {path : 'basket-summary' , component: BasketSummaryComponent} ,
  {path: 'not-found', component: NotFoundComponent},
  {path : 'server-error' , component: ServerErrorComponent} ,
  {path : '**' , component: NotFoundComponent , pathMatch:'full'} //if wrong url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
