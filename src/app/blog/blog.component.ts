import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  is_authenticated: boolean;
  constructor() { }

  ngOnInit() {
    steemconnect.isAuthenticated((err, result) => {
        if (err) {
            console.log('Not Logged In On Blog');
            this.is_authenticated = false;
        } else {
            console.log(`Logged in as ${result.username} on Blog`);
            this.is_authenticated = true;
        }
    });
  }
}
