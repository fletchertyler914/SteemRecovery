import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Article } from './article';
import * as steem from 'steem';

declare var jquery: any;
declare var $: any;

@Injectable()
export class FeedService {

  constructor() {}

  fetchArticles(): Observable<Article[]> {

      // const fetchArticles = new Promise((resolve, reject) => {
        steem.api.getState('created/steem-recovery', function(err, result) {
          // resolve(result);

        const resultsToArray = $.map(result['content'], function(value, index) {
          return [value];
        });

        resultsToArray.forEach(function(obj) {
          const jsonMeta = JSON.parse(obj['json_metadata']);
          const has_image = jsonMeta.hasOwnProperty('image');

          if (has_image) {
            obj.image_source = jsonMeta['image'][0];
            // this.article.image_source = obj.image_source;
          }
          // this.article.title = obj.title;
          // this.article.body = obj.body;
          // this.article.author = obj.author;
          });

          console.log('Inside: ', this.article);
        });

        return null;
      // });
      // .then((results) => {

      //   const resultsToArray = $.map(results['content'], function(value, index) {
      //       return [value];
      //   });

      //   resultsToArray.forEach(function(obj) {
      //     const jsonMeta = JSON.parse(obj['json_metadata']);
      //     const has_image = jsonMeta.hasOwnProperty('image');

      //     if (has_image) {
      //       obj.image_source = jsonMeta['image'][0];
      //       this.article.image_source = obj.image_source;
      //     }
      //     this.article.title = obj.title;
      //     this.article.body = obj.body;
      //     this.article.author = obj.author;
      //   });

      //   console.log('Inside: ', this.article);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

    // console.log('Outside: ', this.article);
    // return this.article;
  }
}
