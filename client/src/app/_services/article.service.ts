import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../_models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles : Article[] = [] 
  baseUrl = environment.apiUrl

  // private articleSource$ = new BehaviorSubject<Array<Article>>([]);
  // public article$: Observable<Array<Article>> 

  constructor(private http: HttpClient) { 
    // this.article$ = this.articleSource$.asObservable()
  }

  getArticles()
  {
    if(this.articles.length > 0 ) return of(this.articles)
    return this.http.get<Article[]>(this.baseUrl + 'article').pipe(
      map(article =>{
        this.articles = article
        return article
        // this.articleSource$.next(article)
      })
    )
  }
  getArticle(id : number)
  {
    return this.http.get<Article>(this.baseUrl + 'article/' + id).pipe(
      map(article=> {
        return article
      })
    )
  }

  AddArticle(model : Article)
  {
    return this.http.post<Article>(this.baseUrl + 'article' , model).pipe(
      map(response => {
        this.articles.push(response)
        // console.log(this.articles)
        // this.getArticles()
      })
    )
  }

  updateArticle(article : Article)
  {

    return this.http.put(this.baseUrl + 'article' , article).pipe(
      map(()=>
      {
        const Index = this.articles.findIndex(x => x.id === article.id)
        this.articles[Index] = article
      })
    )
  }

  deleteArticle(id : number)
  {
    const Index = this.articles.findIndex(x => x.id === id)
    if (Index != -1){
      this.articles.splice(Index, 1);
      }
    return this.http.delete(this.baseUrl + 'article/' +  id)
  }

}
