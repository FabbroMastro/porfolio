import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterLink],
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit(): void {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        this.updateActiveLink();

      }
    });
  }

  updateActiveLink() {
    const mainMenu = document.querySelector('.mil-main-menu') as HTMLElement;

    const menuLinks = mainMenu.querySelectorAll('a');

    menuLinks.forEach((link: HTMLAnchorElement) => {
      const linkRoute = link.getAttribute('routerLink');
      
      if (this.router.url === linkRoute) {
        link.parentElement!.classList.add('mil-current');
      } else {
        link.parentElement!
          .classList.remove('mil-current');
      }
    });
  }
}
