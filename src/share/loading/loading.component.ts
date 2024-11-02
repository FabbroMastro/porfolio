import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

  preloaderPercent: any;
  preloaderLine: any;
  preloader: any;
  progress: number = 0;
  preloaderInterval: any;

  ngOnInit() {
    this.preloaderPercent = document.querySelector('.mil-percent');
    this.preloaderLine = document.querySelector('.mil-preload-line');
    this.preloader = document.querySelector('.mil-preloader');

    this.preloaderInterval = setInterval(() => this.updatePreloader(), 100);
  }

  updatePreloader() {
    if (this.progress <= 100) {
      this.preloaderPercent.textContent = this.progress;
      this.preloaderLine.style.width = this.progress + "%";
      this.progress += 5;
    } else {
      clearInterval(this.preloaderInterval);
      this.preloader.classList.add('mil-complete');
    }
  }
}
