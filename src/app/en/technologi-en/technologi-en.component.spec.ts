import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiEnComponent } from './technologi-en.component';

describe('TechnologiEnComponent', () => {
  let component: TechnologiEnComponent;
  let fixture: ComponentFixture<TechnologiEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
