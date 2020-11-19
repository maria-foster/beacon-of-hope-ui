import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Thread } from '../shared/models/post';
import { User } from '../shared/models/user';
import { ThreadService } from '../shared/services/thread.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @Input () category : string
  user: User;
  title = new FormControl("", Validators.required);
  content = new FormControl("", Validators.required);
  expanded= "expand_more"
  thread : Thread;
  
  constructor( private apiService: ThreadService) { }

  ngOnInit() {
  }

  postThread(){
    this.thread = {
      "_id" : "",
      "category" : this.category,
      "comments" : [],
      "content" : this.content.value,
      "dislikes" : 0,
      "flagged" : false,
      "likes" : 0,
      "title" : this.title.value,
      "user" : this.user._id
    }
    console.log(this.thread)
    this.apiService.createNewThread(this.thread).subscribe((data) => {
      console.log(data)
    })
  }
  flip(){
    if(this.expanded == "expand_more"){
      this.expanded = "expand_less";
    }
    else{
      this.expanded = "expand_more"
    }
  }
}
