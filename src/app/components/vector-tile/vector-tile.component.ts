import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import {
    AfterViewInit, Component, ElementRef, OnInit, ViewChild
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vector-tile',
    templateUrl: './vector-tile.component.html',
    styleUrls: ['./vector-tile.component.css'],
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

    private map: ol.Map;

    constructor() {
        //
    }

    public ngOnInit() {
        //
    }

    public ngAfterViewInit(): void {
        const layer = 'postgis:gd_place_name';
        const epsg = '900913';
        this.map = new ol.Map({
            target: this.mapEl.nativeElement,
            layers: [
                // new ol.layer.Tile({
                //     source: new ol.source.OSM(),
                // }),
                // new ol.layer.VectorTile({
                //     style: (feature: ol.Feature) => {
                //         return new ol.style.Style({
                //             fill: new ol.style.Fill({
                //                 color: 'rgba(144, 255, 144, 0.3)'
                //             }),
                //             stroke: new ol.style.Stroke({
                //                 color: '#880000',
                //                 width: 1
                //             }),
                //             // text: new ol.style.Text({
                //             //     text: feature.get('name'),
                //             //     textAlign: 'center'
                //             // })
                //         });
                //     },
                //     source: new ol.source.VectorTile({
                //         // tilePixelRatio: 1, // oversampling when > 1
                //         projection: 'EPSG:3857',
                //         tileGrid: ol.tilegrid.createXYZ({maxZoom: 19}),
                //         format: new ol.format.MVT({
                //             // featureClass: ol.Feature
                //         }),
                //         url: '/geoserver/gwc/service/tms/1.0.0/' + layer +
                //             '@EPSG:' + epsg + '@pbf/{z}/{x}/{-y}.pbf'
                //     }),
                //     renderOrder: (f1, f2) => 1
                // })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([113.351, 23.1856]),
                zoom: 7
            })
        });
        olms.apply(this.map, 'assets/vector-tile.json');
        window.olmap = this.map;
    }
}
