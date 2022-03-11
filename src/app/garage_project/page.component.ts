import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
getId:any;
getData:any;
flag:boolean=true;
arr7:any[]=[];
id:number=0;
name:string="";
date:number=0;
comment:string="";
// arr6:any[]=[];
  constructor(public service:DataService, public param:ActivatedRoute) { 
    this.arr7=[{
      id:Math.floor(Math.random()*999),
      name:"Rana",
      date:2022,
      comment:"this is an example"
    }];
  }

  ngOnInit(): void {
    this.getId=this.param.snapshot.paramMap.get('id');
    // this.arr6=this.service.arr1;
    console.log(this.getId,'getId');
    this.getData=this.service.arr1.filter((value)=>{
      return value.id==this.getId;
    });
    console.log(this.getData,"getData")
  }
  likee=(id:number)=>{
    let a=this.service.arr1.findIndex((el)=>el.id==id);
    console.log(a);
    this.service.arr1[a].like++;
  }
  commentClick=()=>{
    this.flag=!this.flag;
  }
  commentSubmit=()=>{
    this.arr7.push({id:Math.floor(Math.random()*999),name:this.name,date:this.date,comment:this.comment});
    console.log(this.arr7);
    this.commentClick();
  }
}
