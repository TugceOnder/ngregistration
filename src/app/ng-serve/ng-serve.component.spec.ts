import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServeComponent } from './ng-serve.component';

describe('NgServeComponent', () => {
  let component: NgServeComponent;
  let fixture: ComponentFixture<NgServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
