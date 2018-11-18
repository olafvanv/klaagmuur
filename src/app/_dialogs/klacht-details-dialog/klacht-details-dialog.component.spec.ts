import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlachtDetailsDialogComponent } from './klacht-details-dialog.component';

describe('KlachtDetailsDialogComponent', () => {
  let component: KlachtDetailsDialogComponent;
  let fixture: ComponentFixture<KlachtDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlachtDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlachtDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
