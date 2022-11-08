import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService, NotificationService]
})
export class ContactComponent implements OnInit {
  value1: string | undefined;

  showValue() {
    console.log(this.value1);
  }

  showSuccess() {
    this.notificationService.showSuccess()
  }

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.showValue();
  }
}
