import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Sukces', detail: 'Wiadomość została wysłana'});
  }

}


