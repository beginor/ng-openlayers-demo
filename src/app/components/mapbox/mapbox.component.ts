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

import { apply } from 'ol-mapbox-style';

@Component({
    selector: 'app-mapbox',
    templateUrl: './mapbox.component.html',
    styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, AfterViewInit {

    @ViewChild('map') public mapEl: ElementRef;
    private map: Map;

    constructor() { }

    public ngOnInit(): void {
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
        // tslint:disable-next-line:max-line-length
        const key = 'pk.eyJ1IjoiYmVnaW5vciIsImEiOiJjaXQyZmQ1M24wMGIzMnlwZDhqZG5heGIyIn0.cS4xQ_IUfmYUBHdt7i9qqg';
        apply(
            this.map,
            // tslint:disable-next-line:max-line-length
            'https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=' + key
        );
    }

}
