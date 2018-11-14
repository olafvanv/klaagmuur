import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcuusjesListComponent } from './excuusjes-list.component';

describe('ExcuusjesListComponent', () => {
  let component: ExcuusjesListComponent;
  let fixture: ComponentFixture<ExcuusjesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcuusjesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcuusjesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
