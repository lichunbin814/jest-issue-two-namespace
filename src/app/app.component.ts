import { Component, Input } from '@angular/core';
import { AppType } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // OK
  testField: AppType.Second.Test;

  // TypeError: Cannot read property 'Test' of undefined
  @Input()
  set testSetter(value: AppType.Second.Test) {
    console.log(1);
  }
}
