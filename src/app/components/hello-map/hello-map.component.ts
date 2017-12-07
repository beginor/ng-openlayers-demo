import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    AfterViewInit, Component, ElementRef, OnInit, ViewChild
} from '@angular/core';

import Tile from 'ol/layer/tile';
import Map from 'ol/map';
import proj from 'ol/proj';
import OSM from 'ol/source/osm';
import View from 'ol/view';

@Component({
    moduleId: module.id,
    selector: 'hello-map',
    templateUrl: './hello-map.component.html',
    styleUrls: ['./hello-map.component.scss'],
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
export class HelloMapComponent implements OnInit, AfterViewInit {

    @ViewChild('map') public mapEl: ElementRef;
    public state: any;

    private map: ol.Map;

    public constructor() {
        //
    }

    public ngOnInit() {
        //
    }

    public ngAfterViewInit(): void {
        this.map = new Map({
            target: this.mapEl.nativeElement,
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            view: new View({
                center: proj.fromLonLat([113.351, 23.1856]),
                zoom: 7
            })
        });
    }
}
