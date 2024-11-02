import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-lenguage',
  standalone: true,
  imports: [],
  templateUrl: './lenguage.component.html',
  styleUrl: './lenguage.component.css'
})
export class LenguageComponent implements OnInit {
  constructor(private el: ElementRef){}
  ngOnInit(): void {
    document.querySelectorAll('.mil-progress-prog').forEach(box => {
      const size = box.getAttribute('data-size');
      if (size) {
        (box as HTMLElement).style.setProperty('--size', size);
      }
    });
  }

}
