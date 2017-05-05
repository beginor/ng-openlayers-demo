import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HelloMapComponent } from './components/hello-map/hello-map.component';

export const RouteComponents = [
    HomeComponent,
    HelloMapComponent
];

export const RouteList: RouteWithText[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full', text: '' },
    { path: 'home', component: HomeComponent, text: '' },
    { path: 'hello-map', component: HelloMapComponent, text: 'Hello, map' }
];

export const AppRoutes = RouterModule.forRoot(
    RouteList,
    { useHash: true, enableTracing: false }
);

interface RouteWithText extends Route {
    text: string;
}
