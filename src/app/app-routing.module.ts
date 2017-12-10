import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { HelloMapComponent } from './components/hello-map/hello-map.component';
import { HomeComponent } from './components/home/home.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import {
    VectorTileComponent
} from './components/vector-tile/vector-tile.component';
import { WaterComponent } from './components/water/water.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'hello-map', component: HelloMapComponent },
    { path: 'vector-tile', component: VectorTileComponent },
    { path: 'water', component: WaterComponent },
    { path: 'mapbox', component: MapboxComponent }
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
