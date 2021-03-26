import { Component, OnInit } from '@angular/core';

import { EventsService } from './services/events.service';
import { TextsService } from './services/texts.service';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Test Task';

  currentUser = null;

  defaultLanguage = 'en';

  constructor (
    private router:Router,
    private _snackBar: MatSnackBar,
    private events:EventsService,
    ) { }

  ngOnInit() {
    // Trying to find user token in browser storage
    const userInfo = window.localStorage.getItem('angular-test-app-user')
    if (userInfo) {
      this.currentUser = JSON.parse(userInfo);
    }
  
    this.events.onFormSubmitted.subscribe((user) => {
      this.currentUser = user;
      window.localStorage.setItem('angular-test-app-user', JSON.stringify(this.currentUser))
      this.router.navigate(['/'])
    })

    this.events.onLogoutClick.subscribe(() => {
      this.currentUser = null;
      window.localStorage.removeItem('angular-test-app-user');
      this.router.navigate(['/login'])
    })

    this.events.loginError.subscribe((error) => {
      this._snackBar.open(error, 'Close', {
        duration: 5000,
      })
    })

    this.events.onLanguageChanged.subscribe((lang) => {
      // this.texts = Texts[lang]
    })
  }
}
