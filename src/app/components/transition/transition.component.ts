import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less']
})
export class TransitionComponent implements OnInit {

  public flag:boolean=true;
  constructor() { }

  ngOnInit(): void {
    //组件和指令初始化完成,并不是真正的dom完成
    let Box:any = document.getElementById('box');
    console.log(Box.innerHTML);

    /*
      let oBox1:any=document.getElementById('box1');
      console.log(oBox1.innerHTML);
      oBox1.style.color="blue";
    */
  }

  //处理Dom,视图加载完成以后触发的方法
  ngAfterViewInit() {
    let Box2:any = document.getElementById('box');
    console.log(Box2.innerHTML);
  }

  //显示动画
  showAside() {
    let aside: any = document.getElementById('aside');
    aside.style.transform="translate(0,0)";
  }

  //隐藏动画
  hideAside() {
    //原生js获取dom节点
    let asideDom:any=document.getElementById('aside');
    asideDom.style.transform="translate(100%,0)";
  }
}
