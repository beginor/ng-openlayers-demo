import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HelloMapComponent } from './components/hello-map/hello-map.component';

export const RouteComponents = [
    HomeComponent,
    HelloMapComponent
];

export const AppRoutes = RouterModule.forRoot(
    [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'hello-map', component: HelloMapComponent }
    ],
    { useHash: true, enableTracing: false }
);
