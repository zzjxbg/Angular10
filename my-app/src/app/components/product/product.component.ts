import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  public productList:any[]=[{
    id:'1',
    name:'我是第一个产品'
  },{
    id:'2',
    name:'我是第二个产品'
  }]

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  gotoDetail(ev:any){
    var target = ev.target,
      id =  target.getAttribute('tag');
    this.router.navigate(['/product/detail/',id])

  }

}
