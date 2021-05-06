import {Component, Input, OnInit} from '@angular/core';
import {faClipboard} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.css']
})
export class CopyToClipboardComponent implements OnInit {
  @Input() content: string;

  clipboardIcon = faClipboard;
  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
