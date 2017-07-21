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

    const checkIfAuthenticated = new Promise((resolve, reject) => {
      steemconnect.isAuthenticated((err, result) => {
          resolve(result);
      });
    })
    .then((results) => {
        if (results['isAuthenticated']) {
          // Authenticated
          this.username = results['username'];
          this.is_authenticated = true;

          const getUserImage = new Promise((resolve, reject) => {
            steem.api.getAccounts([this.username], function(err, result) {
              resolve(result);
            });
          })
          .then((result) => {
            const has_metadata = result.hasOwnProperty('json_metadata');

            if (has_metadata) {
              const profile = JSON.parse(result[0].json_metadata)['profile'];
              this.profile_image = 'https://steemitimages.com/120x120/' + profile['profile_image'];
            } else {
              this.profile_image = '../assets/NoProfileImage.png';
            }
          });

        } else {
          // NOT Authenticated
          console.log('not authenticated');
          this.is_authenticated = false;
        }
      });
    }
  }

