import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public common:CommonService) { }  //注册服务

  ngOnInit(): void {

    //1.异步回调
    this.common.getDatacb((res:any)=>{
      console.log(res);
    });

    //2.promise获取
    this.common.getPromise().then((res)=>{
      console.log(res);
    })


    //3.rxjs获取异步数据
    var rxData = this.common.getRxjsData();
    var p1 = rxData.subscribe(res=>{
      console.log(res);
    })

    //4.rxjs多次执行(promise无此功能)
    // this.common.getRxIntervalData().subscribe(res=>{
    //   console.log(res);
    // })

    //5.过一秒后撤回刚才的动作(promise无此功能)
    // setTimeout(()=>{
    //   p1.unsubscribe();
    // },1000)

    //6.pipe
    var stream = this.common.streamFun();
    stream.pipe(
      filter(val=>val % 2==0),  //过滤
      map(value=>{
        return value * value;  //处理数据
      })
      ).subscribe(res=>{
      console.log(res);
    })

  }










}
