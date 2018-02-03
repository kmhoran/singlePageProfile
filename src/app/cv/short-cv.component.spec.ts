import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCvComponent } from './short-cv.component';

describe('ShortCvComponent', () => {
  let component: ShortCvComponent;
  let fixture: ComponentFixture<ShortCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
