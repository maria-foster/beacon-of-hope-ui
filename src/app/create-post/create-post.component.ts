import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThreadService } from '../shared/services/thread.service';
import { TranslateService } from '../shared/services/translate.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @Input () category : string
  @Output() newPost: EventEmitter<any> = new EventEmitter();
  
  userID
  title = new FormControl("", Validators.required);
  content = new FormControl("", Validators.required);
  expanded= "expand_more"
  thread 
  
  constructor( private apiService: ThreadService,
    private apiService2 : TranslateService) { }

  ngOnInit() {
  }

  postThread(){
    this.userID = this.apiService2.getCookie("beacon_login")
    console.log(this.userID)
    if(this.userID != ""){
    this.thread = {
      "category" : this.category,
      "comments" : [],
      "content" : this.content.value,
      "dislikes" : 0,
      "flagged" : false,
      "likes" : 0,
      "title" : this.title.value,
      "date" : String(new Date()),
      "user" : this.userID
    }
    console.log(this.thread)
    this.apiService.createNewThread(this.thread).subscribe((data) => {
      console.log(data)
      this.newPost.emit("newPost")
    })
  }
  else{
    alert("You must be logged in to create a new post! ")
  }

  }
  flip(){
    if(this.expanded == "expand_more"){
      this.expanded = "expand_less";
    }
    else{
      this.expanded = "expand_more"
    }
  }
}
