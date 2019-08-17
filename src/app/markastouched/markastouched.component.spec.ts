import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkastouchedComponent } from './markastouched.component';

describe('MarkastouchedComponent', () => {
  let component: MarkastouchedComponent;
  let fixture: ComponentFixture<MarkastouchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkastouchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkastouchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
