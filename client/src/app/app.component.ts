import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
})
export class AppComponent implements OnInit{
  baseUrl = 'https://localhost:5001/api/';

  constructor(private accountService : AccountService , private http : HttpClient) {}

  ngOnInit()
  {
    this.setCurrentUser()
  }
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountService.setCurrentUser(user);
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response) ;
    } , error => {
    console.log(error);
    })
  }
  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response) ;
    } , error => {
    console.log(error);
    })
  }
  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response) ;
    } , error => {
    console.log(error);
    })
  }
  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response) ;
    } , error => {
    console.log(error);
    })
  }
  get400validationError(){
    this.http.post(this.baseUrl + 'account/register' , {}).subscribe(response=> {
      console.log(response) ;
    } , error => {
    console.log(error);
    })
  }
}



