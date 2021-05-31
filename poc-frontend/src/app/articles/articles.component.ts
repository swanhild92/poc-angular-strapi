import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import ARTICLES_QUERY from '../apollo/queries/article/articles';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  data: any = {};
  loading = true;
  errors: any;
  articles: any[];

  private queryArticles: Subscription;

  constructor(private apollo: Apollo) {}

  public ngOnInit() {
    this.queryArticles = this.apollo
      .watchQuery({
        query: ARTICLES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.articles = this.data.articles;
        console.log(this.articles);
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  public ngOnDestroy() {
    this.queryArticles.unsubscribe();
  }
}
