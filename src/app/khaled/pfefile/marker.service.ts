import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.json';
  constructor(private http: HttpClient) { }

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
        const circle = L.circleMarker([lat, lon]).addTo(map);
      }
    });
  }
}
