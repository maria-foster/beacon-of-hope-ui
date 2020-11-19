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
    private apiService: ThreadService) { } 

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get("category");
      if( this.category != null ){
        this.apiService.getThreadsByCategory(this.category).subscribe((data) => {
          console.log(data)
          this.posts = data.sort((a,b) => ((a.likes-a.dislikes) < (b.likes - b.dislikes)) ? 1 : -1)
        })
      }
    });
  }


  public filterZipcode(zipcode: any):void {
    console.log('Picked zipcode: ', zipcode);
  }

public filterAge(ages: any):void {
  console.log('Picked ages: ', ages);
}

public filterGender(gender: any):void {
  console.log('Picked gender: ', gender);
}

}
