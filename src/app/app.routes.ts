import { Routes } from '@angular/router';
import { Test } from './test/test';
import { Test2 } from './test2/test2';

export const routes: Routes = [
  {
    path: 'test',
    component: Test
  },
  {
    path: 'test2',
    component: Test2
  }
];
