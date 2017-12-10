import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloMapComponent } from './components/hello-map/hello-map.component';
import { HomeComponent } from './components/home/home.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import {
    VectorTileComponent
} from './components/vector-tile/vector-tile.component';
import { WaterComponent } from './components/water/water.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HelloMapComponent,
        MapboxComponent,
        VectorTileComponent,
        WaterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
