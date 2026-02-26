import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { ApodPage } from './components/apod-page/apod-page';
import { Welcome } from './components/welcome/welcome';
import { NeowsPage } from './components/neows-page/neows-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        component: Welcome,
      },
      {
        path: 'apod',
        component: ApodPage,
      },
      {
        path: 'neows',
        component: NeowsPage,
      },
    ],
  },
];
