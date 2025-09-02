import { Component } from '@angular/core';
import { Test2 } from '../test2/test2';

@Component({
  selector: 'app-test',
  imports: [Test2],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

}
