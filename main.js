import { loadProducts } from "./products.js";

var products = await loadProducts(1);

console.log(products);