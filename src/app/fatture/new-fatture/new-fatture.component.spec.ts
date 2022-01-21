import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFattureComponent } from './new-fatture.component';

describe('NewFattureComponent', () => {
  let component: NewFattureComponent;
  let fixture: ComponentFixture<NewFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
