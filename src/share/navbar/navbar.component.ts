import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent implements AfterViewInit {
  mainMenu : HTMLElement = document.querySelector('.mil-main-menu') as HTMLElement; ; // Reference to the <nav> element

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.mainMenu = document.querySelector('.mil-main-menu') as HTMLElement;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });
  }

  updateActiveLink() {
    const menuLinks = this.mainMenu!.querySelectorAll('a');

    menuLinks.forEach((link: HTMLAnchorElement) => {
      // Construct the route path based on your href structure
      const linkRoute = link.getAttribute('href')?.replace('http://localhost:4200', ''); 

      if (this.router.url === linkRoute || (linkRoute === '/home' && this.router.url === '/')) {
        link.parentElement?.classList.add('mil-current');
      } else {
        link.parentElement?.classList.remove('mil-current');
      }
    });
  }
}
