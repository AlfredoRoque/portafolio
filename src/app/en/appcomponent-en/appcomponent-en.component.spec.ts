import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcomponentEnComponent } from './appcomponent-en.component';

describe('AppcomponentEnComponent', () => {
  let component: AppcomponentEnComponent;
  let fixture: ComponentFixture<AppcomponentEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcomponentEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcomponentEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
