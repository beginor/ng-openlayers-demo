import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    AfterViewInit, Component, ElementRef, OnInit, ViewChild
} from '@angular/core';

import Map from 'ol/map';
import proj from 'ol/proj';
import View from 'ol/view';

import { apply } from 'ol-mapbox-style';

@Component({
    moduleId: module.id,
    selector: 'vector-tile',
    templateUrl: './vector-tile.component.html',
    styleUrls: ['./vector-tile.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})

export class VectorTileComponent implements OnInit, AfterViewInit {

    @ViewChild('map') public mapEl: ElementRef;
    public state: any;

    private map: Map;

    constructor() {
        //
    }

    public ngOnInit() {
        //
    }

    public ngAfterViewInit(): void {
        this.map = new Map({
            target: this.mapEl.nativeElement,
            layers: [],
            view: new View({
                center: proj.fromLonLat([113.351, 23.1856]),
                zoom: 7
            })
        });
        apply(this.map, 'assets/vector-tile.json');
    }
}
