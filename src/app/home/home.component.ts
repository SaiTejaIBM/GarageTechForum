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
    var i;
    var divs = document.getElementsByClassName('content');
    console.log(divs);
    for(i=0;i<divs.length;i++) {      
        divs[i].innerHTML = divs[i].innerHTML.substring(0,60);      
    }     
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
