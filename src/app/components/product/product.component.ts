import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  //获取到子组件footer里的数据
  getData(data:any) {
    console.log(data);
  }
}
