import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { TestComponent } from '../test/test.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
// @Input() item:any;
  constructor(public dataService:DataService) { }
arr2:any[]=[];
  ngOnInit(): void {
    this.arr2=this.dataService.arr1;
  }
  clickIt=()=>{
    console.log(this.arr2);
  }

}
