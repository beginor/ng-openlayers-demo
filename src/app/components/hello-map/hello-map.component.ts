import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hello-map',
    templateUrl: './hello-map.component.html',
    styleUrls: ['./hello-map.component.css']
})
export class HelloMapComponent implements OnInit, AfterViewInit {

    @ViewChild('map') mapEl: ElementRef;
    map: ol.Map;

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
