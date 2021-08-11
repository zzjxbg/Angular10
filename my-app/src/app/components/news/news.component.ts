import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  public newsList:any[]=[{
    id:'1',
    name:'第一条新闻'
  },{
    id:'2',
    name:'第二条新闻'
  }]
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  gotoDetail(ev:any) {
    var target = ev.target;
    let id = target.getAttribute('tag');

    this.router.navigate(['newsdetail'],{
      queryParams:{
        name:'laney',
        id:id
      },
      //隐藏url后传递的参数,默认是false
      skipLocationChange:true
    })
  }

}
