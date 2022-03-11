import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
// name:any;
// email:any;
  constructor(public dataService:DataService) { 
    
  }
arr3:any[]=[];
  ngOnInit(): void {
    this.arr3=this.dataService.arr1;
  }
  // disp=()=>{
  //   console.log(this.arr3);
  // }
}
