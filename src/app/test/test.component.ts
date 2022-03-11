import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
// name:any;
// email:any;
title!:string;
date!:string;
author!:string;
content!:string;
image!:string;
flag:boolean= true;
  constructor(public dataService:DataService, private router:Router) { 
    
  }
arr3:any[]=[];
  ngOnInit(): void {
    this.arr3=this.dataService.arr1;
  }
  onSubmit(){
    const blog ={
      title: this.title,
      date: this.date,
      content:this.content,
      author:this.author,
      image:this.image
    }
    console.log(blog);
    this.flag=!this.flag;     
    this.dataService.submitHandle(blog);
    setTimeout(()=>{
      this.router.navigate(['/']);
      console.log(this.flag);
      this.flag=!this.flag;
      console.log(this.flag);
    }
    ,2000);
    
  }
  // disp=()=>{
  //   console.log(this.arr3);
  // }
}
