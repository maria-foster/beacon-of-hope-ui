import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../shared/models/post';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  @Input () thread: Thread
  likesString = "likes"
  username = this.thread.user.username
  title = this.thread.title
  content = this.thread.content
  comments = this.thread.comments
  likes = this.thread.likes
  dislikes = this.thread.dislikes
  totalLikes = this.likes - this.dislikes;
 
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.likes++;
    this.totalLikes = this.likes - this.dislikes;
  }
  decrement(){
    this.dislikes++;
    this.totalLikes = this.likes - this.dislikes;
  }
}
