import { writeFile,mkdir } from "fs/promises";
import { renderHtml,renderHtmlDetalle } from "./render.js";
import { loadProducts } from "./products.js";

var contador = 0;
var products = await loadProducts(100);

if(products.length > 0){
  await mkdir("Productos", { recursive:true });

  for (var product of products){
    contador++;
    const htmlDetalle = renderHtmlDetalle(product);
    const ruta = "Productos/producto" + contador + ".html";
    await writeFile(ruta, htmlDetalle);
  }

  const html = renderHtml(products);
  await writeFile('index.html', html);
}