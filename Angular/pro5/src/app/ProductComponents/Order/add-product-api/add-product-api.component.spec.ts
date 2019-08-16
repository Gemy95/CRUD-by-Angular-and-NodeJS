import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductApiComponent } from './add-product-api.component';

describe('AddProductApiComponent', () => {
  let component: AddProductApiComponent;
  let fixture: ComponentFixture<AddProductApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
