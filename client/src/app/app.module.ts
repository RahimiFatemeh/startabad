import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminGroupComponent } from './admin/admin-group/admin-group.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdiminArticleEditComponent } from './admin/admin-article-edit/admin-article-edit.component';
import { AdminArticleAddComponent } from './admin/admin-article-add/admin-article-add.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptor/loading.interceptor';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { BasketComponent } from './basket/basket.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { UploadComponent } from './upload/upload.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { SummaryPipe } from './summary.pipe';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { AddCourseComponent } from './add-course/add-course.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { DateToPersianPipe } from './date-to-persian.pipe';
import { AdminCourseEditComponent } from './admin-course-edit/admin-course-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    AdminGroupComponent,
    AdminArticleComponent,
    AdiminArticleEditComponent,
    AdminArticleAddComponent,
    CoursesComponent,
    BasketComponent,
    BasketSummaryComponent,
    CoursesListComponent,
    NotFoundComponent,
    ServerErrorComponent,
    UploadComponent,
    SummaryPipe,
    AddCourseComponent,
    AdminDashboardComponent ,
    DateToPersianPipe,
    AdminCourseEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule , 
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule , 
    NgxSpinnerModule ,
    ToastrModule.forRoot({
      positionClass : "toast-bottom-right"
    }) ,
    TextareaAutosizeModule ,
    NgxSmartModalModule.forRoot() ,
    MatTableModule,  // remove later 

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi:true} , 
    {provide:HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
