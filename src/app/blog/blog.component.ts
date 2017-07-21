// import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

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
     // this.feedService.fetchArticles();
      // this.feedService.fetchArticles();

      // console.log(this.articles);
  }
}
