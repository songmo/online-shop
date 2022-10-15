import {Product} from './product.model';

export class ProductListTestdataModel {

  public static getProductListTestdata(id: number, name: string, price: number, imageUrl: string): Product {
    const list = new Product();
    list.id = id;
    list.name = name;
    list.price = price;
    list.imageUrl = imageUrl;
    return list;
  }
}
