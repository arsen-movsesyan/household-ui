import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ssn',
  templateUrl: './ssn.component.html',
  styleUrls: ['./ssn.component.css']
})
export class SsnComponent implements OnInit {
  @Input() ssn: string;
  showSSN = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.showSSN = true;
    setTimeout(() => {
      this.showSSN = false;
    }, 2700);
  }

}
