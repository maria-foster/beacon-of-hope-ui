import { Component, Inject, OnInit } from '@angular/core';
import { Thread } from '../shared/models/post';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from '../shared/services/thread.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  posts : [Thread]
  category : String
  constructor(private route: ActivatedRoute,
    @Inject(ThreadService) apiService: ThreadService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.category = params.get("category");
    //   if( this.category != null ){
    //     this.apiService.getThreadsByCategory(this.category).subscribe((data) => {
    //       this.posts = data
    //     })
    //   }
    //});
  }

}
