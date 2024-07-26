import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [{
    sku: "SKU_1",
    name: "NAME_1",
    price: 1,
    cost: 1,
    availableUnits: 1
  }, {
    sku: "SKU_2",
    name: "NAME_2",
    price: 1,
    cost: 1,
    availableUnits: 1
  }, {
    sku: "SKU_3",
    name: "NAME_3",
    price: 1,
    cost: 1,
    availableUnits: 1
  }, {
    sku: "SKU_4",
    name: "NAME_4",
    price: 1,
    cost: 1,
    availableUnits: 1
  }, {
    sku: "SKU_5",
    name: "NAME_5",
    price: 1,
    cost: 1,
    availableUnits: 1
  }, {
    sku: "SKU_6",
    name: "NAME_6",
    price: 1,
    cost: 1,
    availableUnits: 1
  },];

  constructor() { }

  getProductService() {
    return this.productList;
  }
}
