import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./_pages/home/home.module').then(m => m.HomeComponentModule)
    }
];
