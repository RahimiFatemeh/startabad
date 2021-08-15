import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public progress!: number;
  public message!: string;
  uploadSub! : Subscription
  fileName=""
 
  
  @Output() public onUploadFinished = new EventEmitter();
  
    constructor(private FileUpload: UploadFileService ) { }
    ngOnInit() {
    }

    public uploadFile = (files:any) => {
      if (files.length === 0) {
        return;
      }
      
      let fileToUpload = <File>files[0];
      this.fileName = fileToUpload.name;
      this.uploadSub = this.FileUpload.upload(fileToUpload)
        .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress && event.total)
                this.progress = Math.round(100 * event.loaded / event.total);
              else if (event.type === HttpEventType.Response) {
                this.message = 'با موفقیت اپلود شد';
                this.onUploadFinished.emit(event.body);
              }
            });
      
    }
    cancelUpload() {
      this.uploadSub.unsubscribe()
      this.reset()
    }
  
    reset() {
      this.progress = 0
      this.fileName = ""
      this.message = ""
      this.uploadSub = new Subscription()
    }

}
