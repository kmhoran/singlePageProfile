import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLongComponent } from './cv-long.component';

describe('CvLongComponent', () => {
  let component: CvLongComponent;
  let fixture: ComponentFixture<CvLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
