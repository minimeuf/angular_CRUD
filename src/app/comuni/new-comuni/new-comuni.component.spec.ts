import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComuniComponent } from './new-comuni.component';

describe('NewComuniComponent', () => {
  let component: NewComuniComponent;
  let fixture: ComponentFixture<NewComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
