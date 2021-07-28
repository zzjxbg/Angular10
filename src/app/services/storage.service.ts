import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  count:number=1;
  constructor() { }

  //将数据写入localStorage
  set(key:any,value:any) {
    //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串
    localStorage.setItem(key,JSON.stringify(value));
  }

  //localStorage读取数据,转化为json对象
  get(key:any) {
    return JSON.parse(<string>localStorage.getItem(key));
  }

  //localStorage中删除
  remove(key:any) {
    localStorage.removeItem(key);
  }
}
