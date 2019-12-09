import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MarkerService } from '../marker.service'
import { LocationService } from '../location.service'
import * as L from 'leaflet';

const iconRetinaUrl = '/assets/images/marker-icon-2x.png';
const iconUrl = '/assets/images/marker-icon.png';
const shadowUrl = '/assets/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements  AfterViewInit {

  private map;
  private locations: any[];
  constructor(private markerService: MarkerService, private locationService: LocationService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.markerService.makeCapitalCircleMarkers(this.map);
    console.log(this.locations)
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Copyright © 2019 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
