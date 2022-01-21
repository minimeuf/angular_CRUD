import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFattureComponent } from './details-fatture.component';

describe('DetailsFattureComponent', () => {
  let component: DetailsFattureComponent;
  let fixture: ComponentFixture<DetailsFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
