import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FeedService } from './feed/feed.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', redirectTo: ''},
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
