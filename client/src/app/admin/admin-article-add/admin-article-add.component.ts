import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/_services/article.service';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css']
})
export class AdminArticleAddComponent implements OnInit {
  addArticleForm! : FormGroup
  public response!: {dbPath: ''}
  groups!:any

  constructor(
    private articleService: ArticleService , 
    private groupService : GroupService , 
    private fb : FormBuilder ,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.getGroup()
  }

  addArticle()
  {  
    if(this.response){
    this.addArticleForm.patchValue({
      photo: this.response.dbPath });
    }
    this.articleService.AddArticle(this.addArticleForm.value).subscribe(()=>{
      this.toastr.success("با موفقیت اضافه شد")
    })
  }   

  initializeForm(){
    this.addArticleForm = this.fb.group ({
      title : ['', Validators.required ],
      author : ['',[Validators.required , Validators.maxLength(10)]] ,
      groupId : ['', Validators.required] ,
      body : ['', Validators.required] ,
      photo : ['']
    })
  }

  // onImageChange(event:any) {

  //   if (event.target.files.length) {
  //     const file = event.target.files[0];
  //     this.addArticleForm?.get('image')?.setValue(file);
  //   }
  // }

  uploadFinished(event:any){
    this.response = event
  }

  getGroup(){
    this.groupService.getGroup().subscribe(response => {
      this.groups = response
    })
  }
  changeGroup(event : any)
  {
    // this.cityName.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }

}
