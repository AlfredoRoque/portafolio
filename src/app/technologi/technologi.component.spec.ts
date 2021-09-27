import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiComponent } from './technologi.component';

describe('TechnologiComponent', () => {
  let component: TechnologiComponent;
  let fixture: ComponentFixture<TechnologiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
