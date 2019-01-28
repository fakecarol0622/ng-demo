import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.sass']
})
export class FatherComponent implements OnInit {
  public name:string;
  constructor() { }
  ngOnInit() {
    console.log("父组件ngOninit");
  }
  ngOnchanges(){
    console.log("父组件ngonchanges");
  }
  ngDoCheck (){
    console.log("父组件ngDocheck")
  }
  ngAfterContentInit(){
    console.log("父组件ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("父组件ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("父组件ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("父组件ngAfterViewChecked")
  }
}
