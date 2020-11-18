import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/models/comment'
import { Thread } from '../shared/models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input () comment : Comment
  @Input () thread : Thread 
  username = this.comment.user.username
  content = this.comment.content
  totalLikes = this.comment.likes = this.comment.dislikes
  
  constructor() { }

  ngOnInit() {
  }

}
