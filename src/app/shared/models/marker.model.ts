export class Marker {

    constructor (lat: number, lon: number, label?: string, draggable: boolean = false) {
        this.lat = lat;
        this.lng = lon;
        this.label = label;
        this.draggable = draggable;
    }

    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
