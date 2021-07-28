import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {
  public keyword: string | undefined;
  public todolist:any[]=[];
  showKKK:boolean= true;
  // todolist = [{
  //   title:'aaa',
  //   status:true,
  // disabled:true
  // }]
  constructor(public storage:StorageService) { }

  ngOnInit(): void {
    console.log(this.todolist);
    var historys = this.storage.get('todoList');  //从缓存拿到todolist
    console.log(historys)

    if(historys){
      this.todolist = historys;
    }
  }

  doAdd(ev:any){
    if(ev.keyCode==13){
      //按回车键
      if(!this.todoHasKeyword(this.todolist,this.keyword)) {
        this.todolist.push({
          title:this.keyword,
          status:false ,  // false ：代表代办事件 ，true 已完成事件
          disabled:true
        })
        this.keyword = '';  //清空input里的值

        this.storage.set('todoList',this.todolist);
      }
    }

  }
  checkboxChage(){
    this.storage.set('todoList',this.todolist);
  }

  deleteData(key:any){
    this.todolist.splice(key,1);
    this.storage.set('todoList',this.todolist);
  }
  //如果数据里有 keyword 返回true ,没有false
  todoHasKeyword(todolist:any,keyword:any){
    if(!keyword){
      return false;
    }
    for(var i=0,len= todolist.length;i<len;i++) {
      if(todolist[i].title == keyword){
        return true;
      }
    }

    return false;

    // var isHas = todolist.some((item)=>{
    //    return item.title == keyword
    // });

  }

  updateTitle(ev:any,item:any){
    item.disabled = !item.disabled;
    var type = ev.type;
    switch(type) {
      case 'click':
        setTimeout(()=>{
          ev.target.previousElementSibling.focus();
        })
        break;
      case 'blur':
        break;
    }
  }

}
