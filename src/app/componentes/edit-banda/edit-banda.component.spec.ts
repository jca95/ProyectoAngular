import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandaComponent } from './edit-banda.component';

describe('EditBandaComponent', () => {
  let component: EditBandaComponent;
  let fixture: ComponentFixture<EditBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
