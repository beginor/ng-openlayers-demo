import { Route, RouterModule } from '@angular/router';

import { HelloMapComponent } from './components/hello-map/hello-map.component';
import { HomeComponent } from './components/home/home.component';
import {
    VectorTileComponent
} from './components/vector-tile/vector-tile.component';
import { WaterComponent } from './components/water/water.component';

export const RouteComponents = [
    HomeComponent,
    HelloMapComponent,
    VectorTileComponent,
    WaterComponent
];

export const RouteList: RouteWithText[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full', text: '' },
    { path: 'home', component: HomeComponent, text: '' },
    { path: 'hello-map', component: HelloMapComponent, text: 'Hello, map' },
    {
        path: 'vector-tile',
        component: VectorTileComponent,
        text: 'Vector Tile'
    },
    { path: 'water', component: WaterComponent, text: 'Water'}
];

export const AppRoutes = RouterModule.forRoot(
    RouteList,
    { useHash: true, enableTracing: false }
);

interface RouteWithText extends Route {
    text: string;
}
