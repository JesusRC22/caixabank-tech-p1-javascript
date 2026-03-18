export class Product {
  constructor(title, description, category, price, rating, brand, reviews) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.rating = rating;
    this.brand = brand;
    this.reviews = reviews;
  }
}

export const loadProducts = async (num) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${num}`);
  const { products } = await response.json();
  const productsArray = [];
  for (const { title, description, category, price, rating, brand, reviews } of products) {
    productsArray.push(new Product(title, description, category, price, rating, brand, reviews));
  }
  return productsArray;
};