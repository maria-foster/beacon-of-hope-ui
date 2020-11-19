import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Thread } from '../shared/models/post';
import { ThreadService } from '../shared/services/thread.service';
import { TranslateService } from '../shared/services/translate.service';
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
 
  constructor(
    private apiService : UserService,
    private apiService2: ThreadService,
    private apiService3 : TranslateService
    ) { }
  

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
    if(this.apiService3.getCookie("beacon_login") != "")
    {
      this.likes++;
      this.thread.likes = this.likes;
      this.totalLikes = this.likes - this.dislikes;
      this.apiService2.updateThread(this.thread._id, this.thread).subscribe((data) => { 
        console.log(data)
      })
    }
    else{
      alert("You must be logged in to like a post! ")
    }
    
    
  }
  decrement(){
    if(this.apiService3.getCookie("beacon_login") != "")
    {
      this.dislikes++;
      this.thread.dislikes = this.dislikes
      this.totalLikes = this.likes - this.dislikes;
      this.apiService2.updateThread(this.thread._id, this.thread).subscribe((data) => { 
        console.log(data)
      })
    }
    else{
      alert("You must be logged in to dislike a post! ")
    }
    
  }
}
