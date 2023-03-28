import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdprintComponent } from './idprint.component';

describe('IdprintComponent', () => {
  let component: IdprintComponent;
  let fixture: ComponentFixture<IdprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
