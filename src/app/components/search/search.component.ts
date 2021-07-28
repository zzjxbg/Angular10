import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public keyword:string='';
  public historyList:any[]=[];

  constructor(public storage:StorageService) {

  }

  ngOnInit(): void {
    console.log(this.storage);
    //浏览器刚加载时从缓存获取数据
    var historys = this.storage.get('historyList');
    console.log(historys)

    if(historys){
      this.historyList = historys;
    }
  }
  //删除历史记录
  deleteHistory(key:any){
    this.historyList.splice(key,1);
    this.storage.set('historyList',this.historyList);
  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1) {
      //历史记录里没有keyword
      this.historyList.push(this.keyword);
      this.storage.set('historyList',this.historyList);

    }
  }

}
