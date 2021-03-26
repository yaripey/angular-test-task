import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  onLanguageChanged = new EventEmitter<any>();
  onFormSubmitted = new EventEmitter<any>();
  onLogoutClick = new EventEmitter<any>();
  loginError = new EventEmitter<any>();
}
