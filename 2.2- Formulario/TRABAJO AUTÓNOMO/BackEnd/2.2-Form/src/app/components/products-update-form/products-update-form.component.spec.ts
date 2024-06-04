import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUpdateFormComponent } from './products-update-form.component';

describe('ProductsUpdateFormComponent', () => {
  let component: ProductsUpdateFormComponent;
  let fixture: ComponentFixture<ProductsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
