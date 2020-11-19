import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '../shared/services/translate.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userID
  loggedIn
  name

  @Output () logout: EventEmitter<any> = new EventEmitter();
  constructor(private apiService : TranslateService,
    private apiService2: UserService){}
    
  ngOnInit(){
    this.userID = this.apiService.getCookie("beacon_login") 
    if(this.userID!= ""){
      this.loggedIn = true;
      this.apiService2.getUser(this.userID).subscribe((data) => {
        this.name = data.firstName
        
      })

    }
  }

  logOut(){
    document.cookie = "beacon_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.logout.emit("LoggedOut")
  }
}
