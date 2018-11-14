import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlachtenListComponent } from './klachten-list.component';

describe('KlachtenListComponent', () => {
  let component: KlachtenListComponent;
  let fixture: ComponentFixture<KlachtenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlachtenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlachtenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
