import { Component } from '@angular/core';
import { AboutComponent} from './about/about.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AboutComponent]
})
export class AppComponent {
  title = 'Jumping';
  mycolor = 'pink';
  myname = 'Doug';
  customers = [
    { name: 'Alpha'},
    { name: 'Bravo'}
  ]

  changeBarColor() {
    this.mycolor = this.mycolor === "orange" ? "green" : "orange";
  }

}
