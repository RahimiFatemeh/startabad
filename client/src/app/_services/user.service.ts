import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl
  users:any = {}

  constructor(private http : HttpClient) { }

  getUser(){
    if(this.users.length) return of(this.users)
    return this.http.get(this.baseUrl + 'users').pipe(
      map(response  => {
        this.users = response
        return response
      })
    )
  }
}
