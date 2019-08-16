import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductApiComponent } from './show-product-api.component';

describe('ShowProductApiComponent', () => {
  let component: ShowProductApiComponent;
  let fixture: ComponentFixture<ShowProductApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
