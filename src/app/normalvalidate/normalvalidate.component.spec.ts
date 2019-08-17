import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalvalidateComponent } from './normalvalidate.component';

describe('NormalvalidateComponent', () => {
  let component: NormalvalidateComponent;
  let fixture: ComponentFixture<NormalvalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalvalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
