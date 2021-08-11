import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.less']
})
export class ProductdetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.params);
    this.route.params.subscribe((res)=>{
      console.log(res);
    })
  }


}

