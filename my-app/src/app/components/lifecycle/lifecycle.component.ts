import { Component, OnInit,Input ,EventEmitter} from '@angular/core';

// v-on:event = 'getData()'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less'],
  inputs:['titleV:title','category','hello'],
  outputs:['city1:city']
//  别名的方式： 别名:接受的属性名

})
export class LifecycleComponent implements OnInit {
  @Input('title')
  titleV:any;
  @Input('category')
  category:any;
  @Input('hello')
  hello:any;

  public city1 = new EventEmitter();
  public msg:any='111';
  public userinfo:string='a';
  oldUserinfo:string='';

  constructor() {
    console.log('00构造函数执行了---除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
  }

  ngOnChanges() {
    console.log('01ngOnChages执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)');
  }

  ngOnInit() {
    console.log('title:'+this.titleV)
    console.log('category:'+this.category)
    console.log('hello:'+this.hello)

    this.city1.emit({
      name:'alice',
      age:'20'
    })

    console.log('02ngOnInit执行了--- 请求数据一般放在这个里面');
  }

  ngDoCheck() {
    //写一些自定义的操作
    console.log('03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
    if(this.userinfo!==this.oldUserinfo){
      console.log(`你从${this.oldUserinfo}改成${this.userinfo}`);
      this.oldUserinfo = this.userinfo;
    }else{
      console.log("数据没有变化");
    }

  }

  ngAfterContentInit() {
    console.log('04ngAfterContentInit执行了---在组件内容初始化之后调用');
  }
  ngAfterContentChecked() {
    console.log('05ngAfterContentChecked执行了---组件每次检查内容时调用');
  }
  ngAfterViewInit(): void {
    console.log('06 ngAfterViewInit执行了----组件相应的视图初始化之后调用（dom操作放在这个里面）');
  }
  ngAfterViewChecked() {
    // 组件每次检查视图时调用
    console.log('07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用');
  }


  ngOnDestroy() {

    console.log('08ngOnDestroy执行了····');

    //组件被销毁之前，如果有的用户信息填了部分， 希望回来的时候还是帮忙自动填上 ， 可以把已经填写的再补充上
  }

  //自定义方法

  changeMsg(){
    this.msg="数据改变了";
  }

}


// ngOnInit
// ngAfterViewInit

// 属性更新时

// ngDoCheck
// ngAfterContentChecked
// ngAfterViewChecked
