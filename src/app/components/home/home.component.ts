import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product = [1, 2, 3, 4, 5, 6, 7, 8];
  size = 'large';
  placement = 'topRight';
  clearBeforeNotifications(): void {
    this.notification.remove();
  }
  createBasicNotification(id): void {
    this.notification.config({
      nzPlacement: this.placement
    });
    this.notification.blank(
      'Notification Item '+id,
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }
  constructor(private notification:NzNotificationService) { }

  ngOnInit(): void {
  }

}
