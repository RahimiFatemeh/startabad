import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseApiUrl = environment.apiUrl + 'Upload'

  constructor(private http : HttpClient) { }

    upload(file:any):Observable<any> {
  
      const formData = new FormData(); 
        
      formData.append("file", file, file.name);

      return this.http.post(this.baseApiUrl, formData ,
        {reportProgress: true, observe: 'events'})
  }
}
