import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  @Output()
  outer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //给父组件product发射数据
  sendParent() {
    this.outer.emit('我是子组件footer的数据');
  }
}

//product : 父组件
//footer: 子组件
//子组件需要触发父组件product的方法  @Output

//1.在引用父组件的时候,绑定自定义事件
//<app-footer (outer)="getData($event)"></app-footer>
//2.子组件中引入Output, EventEmitter
//import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//3.子组件中实例化EventEmitter
//@Output()
//outer = new EventEmitter();
//4.子组件通过EventEmitter对象的emit方法广播数据
//this.outer.emit("我是子组件footer的数据")
