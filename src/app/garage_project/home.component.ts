import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
// import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
getId:any;
search:any;
searchText:any;
getData:any[]=[];
  constructor(public dataService:DataService) { 
    // this.count=0;
  }
arr5:any[]=[];
  ngOnInit(): void {
    this.arr5=this.dataService.arr1;
  }
likee=(id:number)=>{
  let a=this.arr5.findIndex((el)=>el.id==id);
  console.log(a);
  this.arr5[a].like++;
}
homeClick=(id:number)=>{
  console.log(id);
}
}
