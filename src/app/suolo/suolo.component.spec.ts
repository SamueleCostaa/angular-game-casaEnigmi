import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuoloComponent } from './suolo.component';

describe('SuoloComponent', () => {
  let component: SuoloComponent;
  let fixture: ComponentFixture<SuoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuoloComponent]
    });
    fixture = TestBed.createComponent(SuoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
