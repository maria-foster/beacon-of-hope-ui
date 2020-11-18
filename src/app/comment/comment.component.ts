import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/models/comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input () comment : Comment
  username = this.comment.user.username
  content = this.comment.content
  comments = this.comment.comments
  totalLikes = this.comment.likes = this.comment.dislikes
  
  constructor() { }

  ngOnInit() {
  }

}
