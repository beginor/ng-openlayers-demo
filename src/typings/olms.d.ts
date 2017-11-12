declare namespace olms {

    export function applyStyle(
        layer: ol.layer.VectorTile,
        glStyle: string | Object,
        source: string | string[],
        path?: string
    ): void;

    export function applyBackground(
        map: ol.Map,
        glStyle: Object
    ): void;

    export function apply(
        map: string | HTMLElement | ol.Map,
        style: string | Object
    ): void;

}
