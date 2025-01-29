import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRosterComponent } from './create-roster.component';

describe('CreateRosterComponent', () => {
  let component: CreateRosterComponent;
  let fixture: ComponentFixture<CreateRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRosterComponent]
    });
    fixture = TestBed.createComponent(CreateRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
