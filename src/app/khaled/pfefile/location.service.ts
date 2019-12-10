import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  key = 'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g'
  locations: any[];
  constructor(private http: HttpClient) { }

  findLocations() {
    this.http.get<any>('/api/intern-dir/map').subscribe((data) => {
      this.locations = data;
    });
    return this.locations;
  }
}
