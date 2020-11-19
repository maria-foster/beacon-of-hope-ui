import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/models/comment'
import { Thread } from '../shared/models/post';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input () comment : Comment
  @Input () thread : Thread 

  content

  
  constructor(private apiService : UserService) { }

  ngOnInit() {
    this.content = this.comment.content

  }

}
