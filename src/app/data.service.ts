import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
arr1:any[]=[];
name:any;
email:any;
image:any;
like:number=0;
content:any;
  constructor() { 
    this.arr1=[
      // {
      //   id:0,
      //   name:"Ram",
      //   email:"r@gmail.com",
      //   image:'https://w0.peakpx.com/wallpaper/573/671/HD-wallpaper-fantasy-animals-wolf-night.jpg',
      //   like:0,
      //   content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      // },  
    ]
    // this.like=0;
  }
  submitHandle=(blog:any)=>{
    console.log(blog);
    // this.arr1=[...this.arr1];      
    this.arr1.push(
      {
        id: this.arr1.length == 0 ? 0 : this.arr1[this.arr1.length-1].id+1,
        name:blog.title,
        email:blog.author,
        image:blog.image,
        like:0,
        content: blog.content
      }
      );
    // this.arr1=[...this.arr1];
    console.log(this.arr1);
    console.log("clicked")
    // return this.arr1;
  }
  // arr4:any[]=[...this.arr1]
 
}
