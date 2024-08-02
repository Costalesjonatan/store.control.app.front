import { Injectable } from '@angular/core';
import { Product } from './../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];

  constructor() {}

  createProduct(
    sku: string,
    name: string,
    price: number,
    cost: number,
    availableUnits: number
  ) {
    console.log({
      id: this.productList.length + 1,
      sku: sku,
      name: name,
      price: price,
      cost: cost,
      availableUnits: availableUnits,
    });
    this.productList.push({
      id: this.productList.length + 1,
      sku: sku,
      name: name,
      price: price,
      cost: cost,
      availableUnits: availableUnits,
    });
  }

  getAllProduct() {
    if (this.productList.length == 0) {
      let i = 0;
      while (i < 100) {
        this.productList.push({
          id: i,
          sku: 'SKU_' + i,
          name: 'NAME_' + i,
          price: 1,
          cost: 1,
          availableUnits: 1,
        });
        i++;
      }
    }
    return this.productList;
  }

  getProductById(id: number) {
    return this.productList[id];
  }
}
