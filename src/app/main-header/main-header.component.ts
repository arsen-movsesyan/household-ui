import { Component, OnInit } from '@angular/core';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css'],
    standalone: false
})
export class MainHeaderComponent implements OnInit {
  faHome = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
