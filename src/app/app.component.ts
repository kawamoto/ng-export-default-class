import { Component } from '@angular/core';
import Foo from './foo.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foo = new Foo();
  title = this.foo.bar;
}
