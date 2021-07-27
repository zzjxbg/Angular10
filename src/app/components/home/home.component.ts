import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',  //组件的名称
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public picUrl='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png';
  public flag:boolean=true;
  public message = "我是原来的message";
  public list:any=[1111,2222,3333];
  public orderStatus:number=3;
  //1.表示已经支付 2.支付并且确认订单 3.表示已经发货 4.表示已经收货 默认:无效订单

  public colorStr:string = 'red';
  public today:any=new Date();
  public keyword:string = 'abc';

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log("我是run方法");
  }

  setData(ev:any) {
    var target = ev.target;
    debugger
    this.message="我是改变后的message";
  }

  keyDown(ev:any) {
    if(ev.keyCode==13) {
      console.log('按了个回车键');
    } else {
      console.log(ev.target.value);
    }
  }

  keyUp(ev:any) {
    if (ev.keyCode == 13) {
      console.log('按了个回车键');
    } else {
      console.log(ev.target.value);
    }
  }

  changeKeyWord(ev:any) {
    this.keyword='我是改变后的值';
  }
}
