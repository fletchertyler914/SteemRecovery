// import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  is_authenticated: boolean;
  articles: any;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
       this.feedService.fetchArticles().then((results) => {

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

        this.articles = resultsToArray;
      })
      .catch((err) => {
        console.log(err);
      });

      // console.log(this.articles);
  }
}
