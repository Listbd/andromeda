import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Jumping';
  mycolor = 'pink';
  myname = 'Doug';

  changeBarColor() {
    this.mycolor = this.mycolor === "orange" ? "green" : "orange";
  }

}
