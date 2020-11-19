import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user'
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  email = new FormControl("", Validators.required)
  fName = new FormControl("", Validators.required)
  lName = new FormControl("", Validators.required)
  pass = new FormControl("", Validators.required)
  num = new FormControl("", Validators.required)
  age = new FormControl("", Validators.required)
  zip = new FormControl("", Validators.required)
  username = new FormControl("", Validators.required)
  gender  = new FormControl("", Validators.required)

  user 
  constructor(private apiService: UserService) { }

  ngOnInit() {
  }

  createAccount() {
   this.user  =  {
    "firstName": this.fName.value,
    "lastName": this.lName.value,
    "email": this.email.value, 
    "password": this.pass.value, 
    "phoneNumber":this.num.value,
    "age": parseInt(this.age.value),
    "zipCode": parseInt(this.zip.value),
    "username": this.username.value,
    "gender" : this.gender.value
    }
    console.log(this.user)
    this.apiService.createNewUser(this.user).subscribe((data) => {
      console.log(data)
    })
  }
}
