import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hello-map',
    templateUrl: './hello-map.component.html',
    styleUrls: ['./hello-map.component.css'],
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

    @ViewChild('map') mapEl: ElementRef;
    map: ol.Map;

    state: any;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit(): void {
        this.map = new ol.Map({
            target: this.mapEl.nativeElement,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([113.351, 23.1856]),
                zoom: 7
            })
        });
    }
}
