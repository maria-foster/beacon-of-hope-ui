import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Thread } from '../shared/models/post';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title = new FormControl("");
  content = new FormControl("");

  thread : Thread;
  user: User;
  constructor() { }

  ngOnInit() {
  }

  postThread(){
    this.thread = {
      "_id" : "",
      "category" : "Test",
      "comments" : [],
      "content" : this.content.value,
      "dislikes" : 0,
      "flagged" : false,
      "likes" : 0,
      "title" : this.title.value,
      "user" : this.user
    }
    console.log(this.thread)
  }
}
