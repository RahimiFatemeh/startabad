import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseUrl = environment.apiUrl
  groups:any = {}
  constructor(private http : HttpClient) { }

  addGroup(model : any)
  {
    return this.http.post(this.baseUrl + 'group' , model)
  }

  getGroup()
  {
    if(this.groups.length) return of(this.groups)
    return this.http.get(this.baseUrl + 'group').pipe(
      map(response  => {
        this.groups = response
        return response
      })
    )
  }
}