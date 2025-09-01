import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.newProduct = { id: 0, name: '', price: 0 };
      this.loadProducts();
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
