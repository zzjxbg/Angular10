import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.less']
})
export class NewsdetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    //获取路由传过来的参数
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
    })
  }

}
