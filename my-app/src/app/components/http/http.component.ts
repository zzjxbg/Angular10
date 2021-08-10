import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
// @ts-ignore
import Qs from 'qs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less']
})
export class HttpComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getPostData();   //post请求
    this.getTestData();   //get请求
    this.getJsonpData();  //jsonp请求
  }

  getPostData() {
    this.http.post('http://localhost:3000/api/info',{
      name:'laney'
    },{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe((res)=>{
      console.log(res);
    })
  }

  getTestData() {
    var obj1 = {
      name:'alice',
      age:'20'
    }

    //第一种方式:字符串的拼接
    var params = Qs.stringify(obj1);
    console.log(params);
    this.http.get('http://localhost:3000/api/school?'+params).subscribe((res)=>{
      console.log(res);
    })

    //第二种方式:HttpParams
    var oarma = new HttpParams({fromString:params});
    this.http.get('http://localhost:3000/qpi/school?',{
      params:oarma
    }).subscribe((res)=>{
      console.log(res);
    })
  }

  getJsonpData() {
    this.http.jsonp('http://localhost:3000/getscript','callback').subscribe((res)=>{
      console.log(res);
    })
  }

  //jsonp请求数据
  //1.app.module.ts引入HttpClientModule,HttpClientJsonpModule
  //2.在用到的地方注册HttpClient

  //总结:get,post请求
  //1.在app.module.ts中引入HttpClientModule
  //import {HttpClientModule,HttpClientJsonpModule} from "@angular/common/http";
  //imports: [HttpClientModule],
  //2.在使用到的地方注册 HttpClient
  //3.订阅(subscribe)返回的数据进行显示
}
