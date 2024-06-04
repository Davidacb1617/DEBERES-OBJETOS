import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgFor } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, NzTableModule, NzButtonModule, NgFor],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  @Output() productSelected = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  selectProduct(product: any): void {
    this.productSelected.emit(product);
  }

  deleteProduct(productId: string): void {
    this.apiService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }
}
