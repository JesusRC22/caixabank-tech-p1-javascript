import { writeFile } from "fs/promises";
import { renderHtml,renderHtmlDetalle } from "./render.js";
import { loadProducts } from "./products.js";

var products = await loadProducts(100);
const html = renderHtml(products);
const htmlDetalle = renderHtmlDetalle(products[52]);

await writeFile('index.html', html);
//console.log(htmlDetalle);