import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductApiComponent } from './edit-product-api.component';

describe('EditProductApiComponent', () => {
  let component: EditProductApiComponent;
  let fixture: ComponentFixture<EditProductApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
