import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trailerplan-race-ng';
  footerUrl = 'https://www.trailerplan.com/';
  footerLink = 'www.trailerplan.com';
  checkError() {
    var err = 10;
    return err;
  }
}
