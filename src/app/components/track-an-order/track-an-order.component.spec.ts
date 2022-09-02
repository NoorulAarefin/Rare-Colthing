import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAnOrderComponent } from './track-an-order.component';

describe('TrackAnOrderComponent', () => {
  let component: TrackAnOrderComponent;
  let fixture: ComponentFixture<TrackAnOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAnOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackAnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
