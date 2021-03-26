import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  vocabulary = {
    en: {
      'lang': 'en',
      'login': 'Login',
      'logout': 'Logout',
      'enter': 'Log in',
      'password': 'Password',
      'welcome': 'Welcome',
      'loginError': 'Incorrect login or password',
      'headerText': 'Test application',
    },
    ua: {
      'lang': 'ua',
      'login': 'Логін',
      'logout': 'Вийти',
      'enter': 'Увійти',
      'password': 'Пароль',
      'welcome': 'Вітаємо',
      'loginError': 'Некоректний логін або пароль',
      'headerText': 'Тестовий додаток',
    },
    ru: {
      'lang': 'ru',
      'login': 'Логин',
      'logout': 'Выйти',
      'enter': 'Войти',
      'password': 'Пароль',
      'welcome': 'Добро пожаловать',
      'loginError': 'Некорректный логин или пароль',
      'headerText': 'Тестовое приложение',
    },
  };

  texts: any;

  constructor() {
    const savedLang = window.localStorage.getItem('angular-test-app-lang');
    if (savedLang) {
      this.texts = this.vocabulary[savedLang];
    } else {
      this.texts = this.vocabulary.en;
    }
  };
  languageChange = new EventEmitter();

  changeLanguage(lang:string) {
    this.texts = this.vocabulary[lang];
    window.localStorage.setItem('angular-test-app-lang', lang);
    this.languageChange.emit();
  };

}
