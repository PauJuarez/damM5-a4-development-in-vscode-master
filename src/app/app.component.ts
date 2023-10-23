import { Component } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    return data.app.generalInformation.title;
  }
  
}
