import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})


export class FiltersComponent implements OnInit {
  zipcodeString = "Zipcode"
  ageString = "Age"
  
  @Output() zipcodeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() agesEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() genderEvent: EventEmitter<any> = new EventEmitter<any>();

  zipcode = new FormControl("")
  

  ngOnInit() { }

  sortByZipcode(){
    console.log(this.zipcode.value)
    this.zipcodeEvent.emit(this.zipcode.value)
  }

  sortByAge1(){
    this.agesEvent.emit([18,19,20,21,22,23,24])

  }
  sortByAge2(){
    this.agesEvent.emit([25,26,27,28,29,30,31,32,33,34])
  }
  sortByAge3(){
    this.agesEvent.emit([35,36,37,38,39,40,41,42,43,44])
  }
  sortByAge4(){
    this.agesEvent.emit([45,46,47,48,49,50,51,52,53,54])
  }
  sortByAge5(){
    this.agesEvent.emit([55,56,57,58,59,60,61,62,63,64])
  }
  sortByAge6(){
    this.agesEvent.emit([65])
  }
  sortByMale(){
    this.genderEvent.emit("male")
  }
  
  sortByFemale(){
    this.genderEvent.emit("female")
  }

  sortByOther(){
    this.genderEvent.emit("other")
  }
  }
  


