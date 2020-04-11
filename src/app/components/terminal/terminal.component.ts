import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Comming soon.. ', 'เรากำลังพัฒนา'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }

}
