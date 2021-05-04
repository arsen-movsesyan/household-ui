import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-ssn',
  templateUrl: './display-ssn.component.html',
  styleUrls: ['./display-ssn.component.css']
})
export class DisplaySsnComponent implements OnInit {
  @Input() ssn: string;
  displayText: string;
  constructor() { }

  ngOnInit(): void {
    this.displayText = this.ssn.substring(0, 3) + '-' + this.ssn.substring(3, 5) + '-' + this.ssn.substring(5, 9);
  }

}
