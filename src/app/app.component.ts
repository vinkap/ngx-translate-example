import { Component, ViewEncapsulation } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

const Languages = [
  { value: 'bn', label: 'Bengali' },
  { value: 'en', label: 'English', default: true },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
  { value: 'ru', label: 'Russian' },
  { value: 'es', label: 'Spanish' },
  { value: 'hi', label: 'Hindi' },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // host: {'class': 'page'}
})
export class AppComponent {
  title = 'ngx-translate-example';
  name = 'World!!';
  Languages: typeof Languages = Languages;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
