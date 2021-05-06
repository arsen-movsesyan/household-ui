import {Component, Input, OnInit} from '@angular/core';
import {faClock} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-timed-display',
  templateUrl: './timed-display.component.html',
  styleUrls: ['./timed-display.component.css']
})
export class TimedDisplayComponent implements OnInit {
  @Input() content: string;
  show = false;

  clockIcon = faClock;
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
