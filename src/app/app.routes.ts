import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HelloMapComponent } from './components/hello-map/hello-map.component';
import { VectorTileComponent } from './components/vector-tile/vector-tile.component';

export const RouteComponents = [
    HomeComponent,
    HelloMapComponent,
    VectorTileComponent
];

export const RouteList: RouteWithText[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full', text: '' },
    { path: 'home', component: HomeComponent, text: '' },
    { path: 'hello-map', component: HelloMapComponent, text: 'Hello, map' },
    { path: 'vector-tile', component: VectorTileComponent, text: 'Vector Tile' }
];

export const AppRoutes = RouterModule.forRoot(
    RouteList,
    { useHash: true, enableTracing: false }
);

interface RouteWithText extends Route {
    text: string;
}
