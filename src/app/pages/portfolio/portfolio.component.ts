import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingComponent } from "../../../share/loading/loading.component";
import { NavbarComponent } from "../../../share/navbar/navbar.component";
import { ImgArticleComponent } from '../../component/portfolio/img-article/img-article.component';
import { BottomPanelComponent } from '../../component/portfolio/bottom-panel/bottom-panel.component';
import { SkillComponent } from "../../component/home/skill/skill.component";
import Isotope from 'isotope-layout';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LoadingComponent, ImgArticleComponent, BottomPanelComponent, SkillComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const grid = document.querySelector('.mil-grid');
    if (grid) {
      const iso = new Isotope(grid as HTMLElement, {
        itemSelector: '.mil-grid-item',
        percentPosition: true,
        transitionDuration: '0.4s',
        masonry: {
          columnWidth: '.mil-grid-sizer',
        }
      });

      const filterLinks = document.querySelectorAll('.mil-filter a');
      filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const filterValue = link.getAttribute('data-filter');
          this.handleFilterClick(iso, filterValue!, e);
        });
      });
    }
  }

  handleFilterClick(iso: any, filterValue: string, event: any) {
    gsap.to('.mil-half-1', {
      scrollTop: 0,
      duration: .3,
      ease: 'sine',
      onComplete: () => ScrollTrigger.refresh()
    });

    iso.arrange({
      filter: filterValue
    });

    const filterLinks = document.querySelectorAll('.mil-filter a');
    filterLinks.forEach(link => link.classList.remove('mil-current'));

    event.currentTarget.classList.add('mil-current');
  }


        }
