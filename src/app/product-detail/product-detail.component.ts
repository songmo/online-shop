import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productId: number;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id from route params ', this.productId);
  }

  public getProductDetails(productId: number) {
  }

}
