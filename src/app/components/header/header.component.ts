import { Component, OnInit, Input } from '@angular/core';

//Input:接收父组件传给子组件的数据或方法
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public title:any="我是header组件";
  @Input('htitle') hometitle:any;
  @Input() category:any;
  @Input() homeWork:any;
  @Input() homepage:any;
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log("我是header")
  }

  getParentProp() {
    console.log(this.hometitle);
    console.log(this.category);
  }

  getParentMethod() {
    console.log(this.homeWork);
    this.homeWork();
  }

  getParentComponent() {
    console.log("我是父组件home");
    console.log(this.homepage);
  }

}

//父组件传值给子组件 @input
//父组件: home
//子组件: header

//1.父组件调用子组件的传入数据、方法、整个组件
// <app-header
//     [htitle]="title"
//     [category]="category"
//     [homeWork]="homeWork()"
//     [homepage]="this"></app-header>
//2.子组件引入Input接受数据
//import { Component, OnInit, Input } from '@angular/core';
// @Input('htitle') hometitle:any;
// @Input() category:any;
// @Input() homeWork:any;
// @Input() homepage:any;
//3.子组件就可以使用父组件的方法和属性了
// getParentMethod() {
//     console.log(this.homeWork);
//     this.homeWork();
//   }

