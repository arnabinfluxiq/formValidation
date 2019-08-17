import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumOfTwoComponent } from './sum-of-two.component';

describe('SumOfTwoComponent', () => {
  let component: SumOfTwoComponent;
  let fixture: ComponentFixture<SumOfTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumOfTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumOfTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
