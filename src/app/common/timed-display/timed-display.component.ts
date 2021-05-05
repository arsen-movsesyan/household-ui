import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timed-display',
  templateUrl: './timed-display.component.html',
  styleUrls: ['./timed-display.component.css']
})
export class TimedDisplayComponent implements OnInit {
  @Input() content: string;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  display() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2700);
  }
}
