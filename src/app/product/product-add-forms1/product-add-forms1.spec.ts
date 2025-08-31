import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddForms1 } from './product-add-forms1';

describe('ProductAddForms1', () => {
  let component: ProductAddForms1;
  let fixture: ComponentFixture<ProductAddForms1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddForms1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddForms1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
