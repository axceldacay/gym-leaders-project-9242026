import { Routes } from '@angular/router';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'kanto', component: Kanto 
    },
    {
        path: 'johto', component: Johto 
    },
    {
        path: 'home', component: Home 
    },
];
