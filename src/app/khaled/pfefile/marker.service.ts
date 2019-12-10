import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './pop-up.service';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient, private popupService: PopUpService) { }

  makeCapitalMarkers(map: any): void {
    this.http.get('/api/intern-dir/map').subscribe((res: any) => {
      console.log(res)
      for (const c of res) {
        const lat = c.point[0];
        const lon = c.point[1];
        const circle = L.marker([lat, lon]).addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: any): void {
    this.http.get('/api/intern-dir/map').subscribe((res: any) => {
      console.log(res)
      for (const c of res) {
        const lat = c.point[0];
        const lon = c.point[1];
        const circle = L.circleMarker([lat, lon]);
        circle.bindPopup(this.popupService.makeCapitalPopup(c));
        circle.addTo(map);
      }
    });
  }
}
