import { Component, OnInit } from '@angular/core';
import * as steemconnect from 'steemconnect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome_message: string;
  additional_message: string;

  constructor() { }

  ngOnInit() {
    const checkIfAuthenticated = new Promise((resolve, reject) => {
      steemconnect.isAuthenticated((err, result) => {
          resolve(result);
      });
    })
    .then((results) => {
        if (results['isAuthenticated']) {
          // Authenticated
          this.welcome_message = 'Welcome Back To SteemRecovery, ' + results['username'] + '!';
          this.additional_message = 'Thank you for being among the first to start a new revolution of recovery on the blockchain!';
        } else {
          // Not Authenticated
          this.welcome_message = 'Welcome To SteemRecovery!';
          this.additional_message = 'Come be one of the first few to join a new revolution of recovery on the blockchain!';
        }
    });
  }
}
