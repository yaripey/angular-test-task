import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { TextsService } from '../../../services/texts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: any

  texts = this.textsService.texts;

  constructor(private events:EventsService, public textsService:TextsService) { }

  ngOnInit(): void {
    this.textsService.languageChange.subscribe(() => {
      this.texts = this.textsService.texts;
    })
  }

  onLogout() {
    this.events.onLogoutClick.emit();
  }

  selectedOption = this.texts.lang;


  onLanguageChange() {
    this.textsService.changeLanguage(this.selectedOption);
  }
}
