import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';
import * as steem from 'steem';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  is_authenticated: boolean;
  results: any;
  regex: any;


  constructor() { }

  ngOnInit() {
    steemconnect.isAuthenticated((err, result) => {
        if (err) {
            // console.log('Not Logged In On Blog');
            this.is_authenticated = false;
        } else {
            // console.log(`Logged in as ${result.username} on Blog`);
            this.is_authenticated = true;
        }
    });

    const fetchArticles = new Promise((resolve, reject) => {
      steem.api.getState('created/steem-recovery', function(err, result) {
        resolve(result);
      });
    })
    .then((results) => {

      const resultsToArray = $.map(results['content'], function(value, index) {
          return [value];
      });

      resultsToArray.forEach(function(obj) {
        const jsonMeta = JSON.parse(obj['json_metadata']);
        const has_image = jsonMeta.hasOwnProperty('image');

        if (has_image) {
          obj.image_source = jsonMeta['image'][0];
        }
      });

      this.results = resultsToArray;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
