import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';

import MVT from 'ol/format/mvt';
import Tile from 'ol/layer/tile';
import VectorTile from 'ol/layer/vectortile';
import Map from 'ol/map';
import proj from 'ol/proj';
import OSM from 'ol/source/osm';
import VectorTileSource from 'ol/source/vectortile';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import Style from 'ol/style/style';
import Text from 'ol/style/text';
import tileGrid from 'ol/tilegrid';
import View from 'ol/view';

@Component({
    selector: 'app-water',
    templateUrl: './water.component.html',
    styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit, AfterViewInit {

    @ViewChild('map') public mapEl: ElementRef;

    private map: Map;

    constructor() {
        //
    }

    public ngOnInit(): void {
        //
    }

    public ngAfterViewInit(): void {
        const layer = 'postgis:gd_river';
        const epsg = '900913';
        this.map = new Map({
            target: this.mapEl.nativeElement,
            layers: [
                new Tile({
                    source: new OSM()
                }),
                new VectorTile({
                    source: new VectorTileSource({
                        projection: 'EPSG:3857',
                        format: new MVT(),
                        url: '/geoserver/gwc/service/tms/1.0.0/' + layer +
                             '@EPSG:' + epsg + '@pbf/{z}/{x}/{-y}.pbf'
                    }),
                    style: (feature) => {
                        const f = feature;
                        return new Style({
                            fill: new Fill({
                                color: 'rgba(0, 255, 0, 0.7)'
                            }),
                            stroke: new Stroke({
                                color: '#b6b6b6',
                                width: 1
                            })
                        });
                    }
                })
            ],
            view: new View({
                center: proj.fromLonLat([113.351, 23.1856]),
                zoom: 7
            })
        });
    }

}
