import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { User } from '../shared/models/user';
import { Comment } from '../shared/models/comment';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  comment = new FormControl("")
  user : User
  commentObj : Comment

  constructor() { }

  ngOnInit() {
  }

  postComment(){
    this.commentObj = {
      "user" : this.user,
      "content" : this.comment.value,
      "likes": 0,
      "dislikes": 0,
      "comments": [],
      "flagged": false
    }

    console.log(this.commentObj)
  }
}
