import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  username = "Temp Username";
  content = "Temp content";
  comments = [];
  totalLikes = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
