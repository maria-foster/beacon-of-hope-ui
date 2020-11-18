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
  title = this.thread.title
  content = this.thread.content
  comments = this.thread.comments
  likes = this.thread.likes
  dislikes = this.thread.dislikes
  totalLikes = this.likes - this.dislikes;
 
  constructor(private apiService : UserService) { }

  ngOnInit() {
    this.apiService.getUser(this.thread.user).subscribe((data) => {
      this.username = data.username
    })
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
