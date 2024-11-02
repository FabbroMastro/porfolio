import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements AfterViewInit {
  constructor(private el: ElementRef){}
  ngAfterViewInit(): void {
    
    document.querySelectorAll('.mil-progress-prog').forEach(box => {
      const size = box.getAttribute('data-size');
      if (size) {
        (box as HTMLElement).style.setProperty('--size', size);
      }
    });
  }
}
