import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [];

  constructor() { }

  getProductService() {
    let i = 0;
    while (i < 100) {
      this.productList.push({
        id:i,
        sku: "SKU_" + i,
        name: "NAME_" + i,
        price: 1,
        cost: 1,
        availableUnits: 1
      });
      i++;
    }
    return this.productList;
  }

  getHousingLocationById(id: number) {
    return this.productList[id];
  }
}
