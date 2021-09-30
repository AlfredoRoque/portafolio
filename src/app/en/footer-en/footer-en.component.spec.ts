import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEnComponent } from './footer-en.component';

describe('FooterEnComponent', () => {
  let component: FooterEnComponent;
  let fixture: ComponentFixture<FooterEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
