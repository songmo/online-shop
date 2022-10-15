import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../shared/model/product.model';
import {ProductService} from '../shared/services/product.service';

export interface Iproduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(public router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.getProductList();
  }

  public getProductList() {
    this.productService.getProductList().subscribe((products: Product[]) => {
        this.products = products;
        console.log('products ' , products);
    });
  }

  public onClickNavigateToDetails(productId: number) {
    console.log('id', productId);
    this.router.navigate(['/detail', productId]);
  }

}
