import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDialogComponent } from './resultado-dialog.component';

describe('ResultadoDialogComponent', () => {
  let component: ResultadoDialogComponent;
  let fixture: ComponentFixture<ResultadoDialogComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
