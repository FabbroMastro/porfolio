import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoadingComponent } from "../share/loading/loading.component";
import '../../public/js/main.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavbarComponent } from '../share/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  appearance = document.querySelectorAll(".mil-up");
  scaleImage = document.querySelectorAll(".mil-scale-img");
  addClassElements = document.querySelectorAll('.mil-add-class');

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.setHeight();
    window.addEventListener('resize', this.setHeight);
  }


  setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  isInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -90 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  ngAfterViewInit() {
    const filteredAppearance = Array.from(this.appearance).filter((el: Element) => !this.isInViewport(el));
    const filteredAddClassElements = Array.from(this.addClassElements).filter((el: Element) => !this.isInViewport(el));

    filteredAppearance.forEach(section => this.handleScrollAnimation(section, this.createScrollTrigger));
    filteredAddClassElements.forEach((element: Element) => this.handleClassToggle(element));

    this.scaleImage.forEach(section => this.handleScaleAnimation(section));
  }

  handleScrollAnimation(section: Element, callback: any) {
    const container = section.closest('.mil-half-1') || section.closest('.mil-half-2');
    callback(section, container);
  }

  handleScaleAnimation(section: Element) {
    const container = section.closest('.mil-half-1') || section.closest('.mil-half-2');
    const value1 = Math.max(0.95, parseFloat(section.getAttribute("data-value-1") || "0.95"));
    const value2 = parseFloat(section.getAttribute("data-value-2") || "1");
    this.createScaleAnimation(section, container!, value1, value2);
  }

  handleClassToggle(element : Element) {
    const container = element.closest('.mil-half-1') || element.closest('.mil-half-2');
    this.createClassToggleScrollTrigger(element, container!);
  }
  createClassToggleScrollTrigger(element: Element, arg1: Element) {
    throw new Error('Method not implemented.');
  }

  createScrollTrigger(section: Element, scroller: Element) {
    gsap.fromTo(section, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      pointerEvents: 'none',
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.4,
      onComplete: () => {
        setTimeout(() => {
          section.setAttribute('style', 'pointer-events: all;');
        }, 100);
      },
      scrollTrigger: {
        trigger: section,
        scroller: scroller,
        toggleActions: 'play none none reverse',
        start: 'top 90% bottom',
        onEnter: () => section.setAttribute('style', 'pointer-events: none;'),
        onLeaveBack: () => section.setAttribute('style', 'pointer-events: none;'),
      }
    });
  }

  createScaleAnimation(element: Element, scroller: Element, value1: number, value2: number) {
    ScrollTrigger.create({
      trigger: element,
      scroller: scroller,
      toggleActions: 'play none none reverse',
      onEnter: () => {
        gsap.to(element, {
          scale: value1,
          duration: 0.4
        })
      },
      onLeaveBack: () => this.removeClassFromElement(element)
    });
  }

  addClassToElement(element: Element) {
    element.classList.add('mil-add-class-active');
  }

  removeClassFromElement(element: Element) {
    element.classList.remove('mil-add-class-active');
  }
  
}
