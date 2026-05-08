import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-email-display',
    templateUrl: './email-display.component.html',
    styleUrls: ['./email-display.component.css'],
    standalone: false
})
export class EmailDisplayComponent implements OnInit {
  @Input() email: string;
  constructor() { }

  ngOnInit(): void {
  }

}
