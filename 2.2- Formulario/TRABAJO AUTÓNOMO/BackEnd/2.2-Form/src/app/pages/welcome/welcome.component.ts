import { Component, OnInit } from '@angular/core';
import { ProductsFormComponent } from '../../components/products-form/products-form.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductsUpdateFormComponent } from '../../components/products-update-form/products-update-form.component';
import { EmployeesComponent } from '../../components/employees-form/employees-form.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    EmployeesComponent,
    ProductsFormComponent,
    ProductListComponent,
    ProductsUpdateFormComponent,
  ],
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  product: any = [];
  constructor() {}

  ngOnInit() {}
}
