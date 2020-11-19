import { Component } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beaconOfHopeUI2';

  languages = [
    "Spanish",
    "Chinese",
    "Dutch",
    "German",
    "Italian",
    "French",
    "Vietnamese",
    "Russian",
    "Arabic",
    "Korean",
    "Hindi",
    "Polish",
    "Gujarati",
    "Haitian",
    "West African",
    "Greek"
  ]

  logout(test : any){
    window.location.reload()
  }

  login(test : any){
    window.location.reload()
  }
}
