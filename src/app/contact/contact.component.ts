import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  value1: string | undefined

  showValue() {
    console.log(this.value1)
  }
  constructor() { }


  ngOnInit(): void {
    this.showValue()
  }

}
