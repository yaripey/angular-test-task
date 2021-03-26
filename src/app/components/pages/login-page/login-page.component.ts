import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { TextsService } from '../../../services/texts.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login:string;
  password:string;

  texts = this.textsService.texts;

  constructor(
      private events:EventsService,
      public textsService:TextsService,
    ) { }

  ngOnInit(): void {
    this.textsService.languageChange.subscribe(() => {
      this.texts = this.textsService.texts;
    })
  }

  onSubmit() {
    console.log(this.login, this.password)
    if ((this.login !== 'test') || (this.password !== 'test')) {
      this.events.loginError.emit(this.texts.loginError);
    } else {
      this.events.onFormSubmitted.emit({
        login: this.login,
        password: this.password,
      });
    }
  }

}
