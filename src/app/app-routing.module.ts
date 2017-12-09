import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { HelloMapComponent } from './components/hello-map/hello-map.component';
import { HomeComponent } from './components/home/home.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import {
    VectorTileComponent
} from './components/vector-tile/vector-tile.component';
import { WaterComponent } from './components/water/water.component';

const routes: RouteWithText[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full', text: '' },
    { path: 'home', component: HomeComponent, text: '' },
    { path: 'hello-map', component: HelloMapComponent, text: 'Hello, map' },
    {
        path: 'vector-tile',
        component: VectorTileComponent,
        text: 'Vector Tile'
    },
    { path: 'water', component: WaterComponent, text: 'Water' },
    { path: 'mapbox', component: MapboxComponent, text: 'Mapbox' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

interface RouteWithText extends Route {
    text: string;
}
