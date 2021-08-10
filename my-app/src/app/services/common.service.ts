import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getDatacb(cb:any) {
    setTimeout(() => {
      cb('getCBdata')
    }, 1000)
  }

  getPromise() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('张三---promise');
      },1000);
    })
  }

  getRxjsData() {
    return new Observable(observer=>{
      setTimeout(()=>{
        var username='小明--rxjs'
        observer.next(username);  //异步操作的结果，作为参数传递出去
      },3000)
    })
  }

    //4.rxjs获取异步数据流执行多次(promise无此功能)
  getRxIntervalData(){
    return new Observable(observer=>{
      var count=0;
      setInterval(()=>{
        count++;
        var username= '小明---rxjs-Interval'
            observer.next(username + count);
      },1000)
    })
  }

  streamFun() {
    return new Observable<any>(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count++);
      },1000);
    });
  }






}
