import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input () language : string
  buttons = [ 
    "Housing and Shelter",
    "Food",
    "Utilities",
    "Healthcare",
    "Mental Health & Addictions",
    "Employment & Income",
    "Clothing & Household",
    "Child Care and Parenting",
    "Government & Legal",
    "Transportation Assistance",
    "Education",
    "Disaster",
    "Other"
  ]
  constructor() { }

  ngOnInit() {
  }

}
