import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../shared/models/user';
import { Comment } from '../shared/models/comment';
import { Thread } from '../shared/models/post';
import { ThreadService } from '../shared/services/thread.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  comment = new FormControl("", Validators.required)
  user : User
  commentObj : Comment

  @Input () thread : Thread 
  constructor( private apiService: ThreadService) { }

  ngOnInit() {

  }

  postComment(){
    this.commentObj = {
      "user" : this.user._id,
      "content" : this.comment.value,
      "likes": 0,
      "dislikes": 0,
      "flagged": false
    }
    this.thread.comments.push(this.commentObj)
    this.apiService.updateThread(this.thread._id, this.thread).subscribe((data) => {
      console.log(data)
    })
    console.log(this.commentObj)
  }
}
