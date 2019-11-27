import { Notification } from './../notification';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  Notification : any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadNotifications()  
  }

  loadNotifications(){
    return this.restApi.getNotifications().subscribe((data: {})=>{
      this.Notification =data;
    })
  }
}
