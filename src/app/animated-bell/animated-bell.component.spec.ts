import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBellComponent } from './animated-bell.component';

describe('AnimatedBellComponent', () => {
  let component: AnimatedBellComponent;
  let fixture: ComponentFixture<AnimatedBellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedBellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedBellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
