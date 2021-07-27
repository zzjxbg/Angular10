import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  //定义普通数据
  title:string='我是新闻组件'
  message:any='我是信息'
  public userinfo:any = {
    username:'alice',
    age:20
  }
  public content = '<h2>我是html标签<h2>'

  //定义数组
  public list:any[] = ['苹果',11,'香蕉']

  constructor() { }

  ngOnInit(): void {
  }

}
