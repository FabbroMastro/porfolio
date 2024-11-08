import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-barner',
  standalone: true,
  imports: [],
  templateUrl: './barner.component.html',
  styleUrl: './barner.component.css'
})
export class BarnerComponent implements OnInit {

  words: string[] = ["Milo","Hello"];
  currentText: string = "";
  wordIndex: number = 0;
  isDeleting: boolean = false;

  ngOnInit(): void {

    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    let typeSpeed = this.isDeleting ? 25 : 70;

    if (!this.isDeleting && this.currentText === currentWord) {
      typeSpeed = 1000; // Aspetta 1 secondo prima di cancellare
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === "") {
      this.isDeleting = false;
      this.wordIndex++;
      if (this.wordIndex === this.words.length) {
        this.wordIndex = 0;
      }
    }
  
    setTimeout(() => this.type(), typeSpeed);

  }
}
