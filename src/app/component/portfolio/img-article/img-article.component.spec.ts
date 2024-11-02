import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgArticleComponent } from './img-article.component';

describe('ImgArticleComponent', () => {
  let component: ImgArticleComponent;
  let fixture: ComponentFixture<ImgArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
