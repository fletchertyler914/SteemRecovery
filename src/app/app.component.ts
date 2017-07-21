import { resetFakeAsyncZone } from '@angular/core/testing/src/testing';
import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';
import * as steem from 'steem';

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
  username: string;
  profile_image: string;

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
            this.is_authenticated = false;
        } else {
            this.is_authenticated = true;
            this.username = result.username;
        }
    });

    if (this.is_authenticated) {
      const getUserImage = new Promise((resolve, reject) => {
        steem.api.getAccounts(['tyler-fletcher'], function(err, result) {
          resolve(result);
        });
      })
      .then((results) => {
        const profile = JSON.parse(results[0].json_metadata)['profile'];
        this.profile_image = 'https://steemitimages.com/120x120/' + profile['profile_image'];
      });
    }
  }
}
