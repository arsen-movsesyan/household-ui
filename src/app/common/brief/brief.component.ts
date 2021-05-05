import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.css']
})
export class BriefComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
