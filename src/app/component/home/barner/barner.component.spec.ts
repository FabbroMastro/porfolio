import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarnerComponent } from './barner.component';

describe('BarnerComponent', () => {
  let component: BarnerComponent;
  let fixture: ComponentFixture<BarnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
