import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  is_authenticated: boolean;
  user: string;
  constructor() { }

  ngOnInit() {
    steemconnect.isAuthenticated((err, result) => {
        if (err) {
            console.log('Not Logged In On Home');
            this.is_authenticated = false;
        } else {
            console.log(`Logged in as ${result.username} on Home`);
            this.user = result.username;
            this.is_authenticated = true;
        }
    });
  }
}
