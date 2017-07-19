import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  message: string;
  url: string;
  is_authenticated: boolean;

  ngOnInit() {
    this.title = 'SteemRecovery';

    steemconnect.init({
      baseURL: 'https://steemconnect.com',
      app: 'tyler-fletcher',
      callbackURL: 'http://localhost:4200'
    });

    this.url = steemconnect.getLoginURL();

    steemconnect.isAuthenticated((err, result) => {
        if (err) {
            console.log('Not Logged In');
            this.is_authenticated = false;
        } else {
            console.log(`Logged in as ${result.username}`);
            this.is_authenticated = true;
        }
    });
  }
}
