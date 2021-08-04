import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  //通过ViewChild获取Dom
  @ViewChild('myBox')
  public myBoxIn:any;

  @ViewChild("header")
  public header:any;

  constructor() { }

  ngOnInit(): void {

  }

  //处理dom节点
  ngAfterViewInit() {
    console.log(this.myBoxIn.nativeElement);

    //父组件获取到整个子组件header
    console.log(this.header);
  }

  //获取子组件header的属性
  getChildProp() {
    console.log(this.header.title);
  }

  //获取子组件header的方法
  getChildMethod() {
    console.log(this.header.run);
    this.header.run();
  }

  newsRunn() {
    console.log("")
  }

}

// 父组件 news 引入 <app-header #header></app-header>
// 子组件 header

//总结:
//1. 父组件调用子组件的时候,调用子组件一个名称
//<app-header #header></app-header>
//2.在父组件引入ViewChild
//import { Component, OnInit,ViewChild } from '@angular/core';
//@ViewChild("header")
//public header:any;
//3.已经可以在父组件中调用子组件的属性和方法了


