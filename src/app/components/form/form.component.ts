import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  public cityList=['北京','上海','深圳'];
  public peopleInfo:any={
    username:'alice',
    sex:'2',
    city:'上海',
    hobby:[{
      title:'吃饭',
      checked:false
    },{
      title:'睡觉',
      checked:false
    },{
      title:'敲代码',
      checked:true
    }],
    remark:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  doSubmit(ev:any){
    var target = ev.target;
    console.log(ev)
    console.log(this.peopleInfo)
  }

}
