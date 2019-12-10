import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>First Name: ${ data.first_name }</div>` +
      `<div>Last Name: ${ data.last_name }</div>` +
      `<div>Address: ${ data.address }</div >`
  }
}
