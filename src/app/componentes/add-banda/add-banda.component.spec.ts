import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBandaComponent } from './add-banda.component';

describe('AddBandaComponent', () => {
  let component: AddBandaComponent;
  let fixture: ComponentFixture<AddBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
