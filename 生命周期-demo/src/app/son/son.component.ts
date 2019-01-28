import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.sass']
})
export class SonComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
    console.log("子组件ngOninit");
  }
  ngOnChanges (){
    console.log("子组件ngonchanges");
  }
  ngDoCheck (){
    console.log("子组件ngDocheck")
  }
  ngAfterContentInit(){
    console.log("子组件ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("子组件ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("子组件ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("子组件ngAfterViewChecked")
  }
  
}