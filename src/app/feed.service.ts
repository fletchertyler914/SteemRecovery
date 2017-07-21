import { Injectable } from '@angular/core';
import * as steem from 'steem';

declare var jquery: any;
declare var $: any;

@Injectable()
export class FeedService {

  constructor() {}

  fetchArticles() {

    const fetchArticles = new Promise((resolve, reject) => {
        steem.api.getState('created/steem-recovery', function(err, result) {
          resolve(result);
        });
      });

      return fetchArticles;
  }
}
