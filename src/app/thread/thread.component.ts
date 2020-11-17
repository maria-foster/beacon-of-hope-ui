import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  username = "temp user"
  title = "tempTitle"
  content = "content"
  comments = [];
  likes = 0;
  dislikes = 0;
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
