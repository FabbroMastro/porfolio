import { Component, Input, OnInit } from '@angular/core';
import { BottomPanelComponent } from '../bottom-panel/bottom-panel.component';
import { Fancybox } from "@fancyapps/ui";

@Component({
  selector: 'app-img-article',
  standalone: true,
  imports: [BottomPanelComponent],
  templateUrl: './img-article.component.html',
  styleUrl: './img-article.component.css'
})
export class ImgArticleComponent implements OnInit{

  @Input() big: boolean = false;
  @Input() title: string = "";
  @Input() img: string = "";
  @Input() category: string = "";

  ngOnInit() {
    Fancybox.bind("[data-fancybox='gallery']", {
      hideScrollbar: false,
      idle: false,
      Carousel: {
          transition: "slide",
      },
    });

    document.querySelectorAll('.mil-zoom').forEach(button => {
      button.addEventListener('click', function (event) {
          event.preventDefault();
          const parentCard = button.closest('.mil-work-card, .mil-pub-img');
          const image = parentCard?.querySelector('a[data-fancybox="gallery"]');
          
      });
    });

    Fancybox.defaults.Hash = false;
  }

  

}
