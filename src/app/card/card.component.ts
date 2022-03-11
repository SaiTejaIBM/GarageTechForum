import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public dataService:DataService) { }
arr5:any[]=[];
  ngOnInit(): void {
    this.arr5=this.dataService.arr1;
  }

}
