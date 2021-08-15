import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/_models/Article';
import { ArticleService } from 'src/app/_services/article.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
  Articles$! : Observable<Article[]>
  // article! : Article 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  
  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticle()
    // this.Articles$ = this.articleService.article$;
  }

  getArticle()
  {
    this.Articles$ = this.articleService.getArticles()
    // this.articleService.getArticles().subscribe();
  }

  deleteArticle(id : number)
  {
    if(confirm("آیا از حذف مطمئن هستید؟")){
      this.articleService.deleteArticle(id).subscribe(()=>{
        this.getArticle()
      })
    }
  }
  
  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }

  SearchInArticle()
  {
    
  }

}
