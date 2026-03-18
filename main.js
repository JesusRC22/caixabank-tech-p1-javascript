import { render } from "./render.js";
import { loadProducts } from "./products.js";

var products = await loadProducts(100);
const html = render(products);

console.log(html);