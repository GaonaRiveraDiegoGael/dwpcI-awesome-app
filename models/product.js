const products = [];

export default class Product {
  constructor(title) {
    this.title = title;
  }

  // Methods
  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}