import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../shared/models/post';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  @Input () thread: Thread
  likesString = "likes"
  username
  title
  content 
  comments 
  likes
  dislikes
  totalLikes
 
  constructor(private apiService : UserService) { }

  ngOnInit() {
    this.apiService.getUser(this.thread.user).subscribe((data) => {
      this.username = data.username
    })
    this.title = this.thread.title
    this.content = this.thread.content
    this.comments = this.thread.comments
    this.likes = this.thread.likes
    this.dislikes = this.thread.dislikes
    this.totalLikes = this.likes - this.dislikes;
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
