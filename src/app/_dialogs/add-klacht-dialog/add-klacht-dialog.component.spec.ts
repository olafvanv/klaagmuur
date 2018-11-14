import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKlachtDialogComponent } from './add-klacht-dialog.component';

describe('AddKlachtDialogComponent', () => {
  let component: AddKlachtDialogComponent;
  let fixture: ComponentFixture<AddKlachtDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKlachtDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKlachtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
