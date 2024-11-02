import { Component } from '@angular/core';
import {ElementRef} from "@angular/core";

@Component({
  selector: 'app-barner',
  standalone: true,
  imports: [],
  templateUrl: './barner.component.html',
  styleUrl: './barner.component.css'
})
export class BarnerComponent {

  typeSpeed = 70;
  backSpeed = 20;
  backDelay = 1500;


  constructor(private el: ElementRef){}
  ngOnInit(): void {
    const clonedBlock = this.el.nativeElement.querySelector('.mil-cloned');
    const cloneDestination = this.el.nativeElement.querySelector('.mil-cv-clone-here');

    if (clonedBlock && cloneDestination) {
        const clonedElement = clonedBlock.cloneNode(true);
        cloneDestination.appendChild(clonedElement);

        const bannerBg = clonedElement.querySelector('.mil-banner-bg') as HTMLElement;
        if (bannerBg) {
            bannerBg.classList.add('mil-fw-banner');
        }
    }
  }

  ngAfterViewInit(): void {
    const textElements = this.el.nativeElement.querySelectorAll(".mil-typing");
    const strings = ["Frontend Developer", "Web Developer", "Backend Developer", "Sognatore 😊"];
    
    textElements.forEach((textElement: HTMLElement) => {
        this.typeText(textElement, strings);
    });
  }

  typeText(textElement: HTMLElement, strings: string[]) {
      let currentStringIndex = 0; 
      let currentCharIndex = 0; 
      let isDeleting = false; 

      const type = () => {
          const currentString = strings[currentStringIndex]; 
          const displayedText = currentString.substring(0, isDeleting ? currentCharIndex-- : currentCharIndex++); 
          textElement.textContent = displayedText; 

          if (!isDeleting && currentCharIndex === currentString.length) { 
              setTimeout(() => isDeleting = true, this.backDelay); 
          } else if (isDeleting && currentCharIndex === 0) { 
              isDeleting = false; 
              currentStringIndex = (currentStringIndex + 1) % strings.length; 
          } 

          const delay = isDeleting ? this.backSpeed : this.typeSpeed; 
          setTimeout(type, delay); 
      };

      type(); 
  }
}
