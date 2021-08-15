import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/_models/Article';
import { ArticleService } from 'src/app/_services/article.service';

@Component({
  selector: 'admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css']
})
export class AdiminArticleEditComponent implements OnInit {
  article: Article = {
    id: 1 , 
    author : '',
    title :'' , 
    date : '',
    body : '' ,  
    photo : '',
    groupId : 1
    
  }
  @ViewChild('editForm') editForm!: NgForm;

  constructor(
    private articleService : ArticleService ,
    private route : ActivatedRoute ,
    private toast : ToastrService
    ) {}

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember()
  {
    var id = this.route.snapshot.params['id']
    if(id){
      this.articleService.getArticle(id).subscribe(response => this.article=response)
    }
  }
  updateArticle()
  {
      this.articleService.updateArticle(this.article).subscribe(()=>{
        this.toast.success("با موفقیت ویرایش شد")
        this.editForm.reset(this.article);
      })
  }
    // this.articleService.updateArticle(this.article).subscribe( ()=>{
    //   // this.toast.success("Profile Updated successfully!")
    //   // this.editForm.reset(this.member);
    // })
}
