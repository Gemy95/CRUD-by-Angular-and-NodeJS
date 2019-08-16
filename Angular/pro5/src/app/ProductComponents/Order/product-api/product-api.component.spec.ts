import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApiComponent } from './product-api.component';

describe('ProductApiComponent', () => {
  let component: ProductApiComponent;
  let fixture: ComponentFixture<ProductApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
