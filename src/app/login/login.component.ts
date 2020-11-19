import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl("", Validators.required)
  password = new FormControl("", Validators.required)

  constructor(private apiService : UserService) { }

  ngOnInit() {
  }

  login(){
      this.apiService.login(this.username.value, this.password.value).subscribe((data) => {
        console.log(data)
        if(data[0] != null ){
          var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "beacon_login" + "=" + data[0]._id+ ";" + expires + ";path=/";
        window.location.reload
        alert("You have successfully logged in!")
        }
      })
      
    
  }
}
