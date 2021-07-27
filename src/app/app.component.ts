import { Component } from '@angular/core';

interface Course {
  id:number,
  description:string
}

@Component({
  selector: 'app-root',
  // template:`
  //   <div class="course">
  //       <span class="description">{{courseObj.description}}</span>
  //   </div>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ngDemo';
  public courseObj:Course = {
    id:1,
    description:'angular'
  }
}
