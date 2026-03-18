import { Product } from "./products.js";

const headHtml = (title) => `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="Styles/style-index.css">
</head>`;

const headHtmlDetalle = (title) => `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="../Styles/style-producto.css">
</head>`;

const header = () => `
<header class="header">
    <div class="header-container">
      <div class="logo-area">
        <div class="logo">
          <div class="logo-img">M</div>
          <span class="logo-text">Tu logo</span>
        </div>
      </div>

      <h1 class="header-title">Mercado de oportunidades</h1>

      <div class="profile-area">
        <div class="profile-icon" title="Perfil">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/>
          </svg>
        </div>
      </div>
    </div>
  </header>`;
  
const footer = () => `
<footer class="footer">
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">M</div>
        <div>
          <h3 class="footer-title">Mercado de oportunidades</h3>
          <p class="footer-text">Encuentra productos interesantes al mejor precio.</p>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4>Empresa</h4>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Blog</a>
        </div>

        <div class="footer-column">
          <h4>Ayuda</h4>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
        </div>

        <div class="footer-column">
          <h4>Legal</h4>
          <a href="#">Aviso legal</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Mercado de oportunidades. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>`;

const renderProducts = (products) => {
  let contador = 0;
  let html = "";
  for (const product of products) {
    contador++;
    html += `<article class="product-card">
          <div class="product-image-wrapper">
            <img
              class="product-image"
              src="${product.images[0]}"
              alt="${product.title}"
            />
          </div>

          <div class="product-info">
            <h2 class="product-title">${product.title != undefined ? product.title : "No disponible"}</h2>

            <div class="product-meta">
              <div class="meta-row">
                <span class="meta-label">Precio:</span>
                <span class="price">${product.price.toFixed(2)} €</span>
              </div>

              <div class="meta-row">
                <span class="meta-label">Rating:</span>
                <span class="rating">⭐ ${product.rating != undefined ? product.rating : "No disponible"}</span>
              </div>

              <div class="meta-row">
                <span class="meta-label">Marca:</span>
                <span class="brand">${product.brand != undefined ? product.brand : "No disponible"}</span>
              </div>
            </div>

            <a href="Productos/producto${contador}.html"><button class="product-button">Ver más...</button></a>
          </div>
        </article>`;
  }
  return html;
}

const renderProductsDetalle = (product) => {
  const averageRating = calculateAverageRating(product.reviews);
  
  let html = `<div class="card product-info-card">
          <span class="product-badge">${product.category}</span>
          <h2 class="product-title">${product.title != undefined ? product.title : "No disponible"}</h2>
          <p class="product-description">${product.description != undefined ? product.description : "No disponible"}</p>

          <div class="info-grid">
            <div class="info-row">
              <span class="info-label">Precio</span>
              <span class="info-value price">${product.price.toFixed(2)} €</span>
            </div>

            <div class="info-row">
              <span class="info-label">Marca</span>
              <span class="info-value">${product.brand != undefined ? product.brand : "No disponible"}</span>
            </div>

            <div class="info-row">
              <span class="info-label">Valoración media</span>
              <span class="info-value rating">⭐ ${averageRating} / 5</span>
            </div>

            <div class="info-row">
              <span class="info-label">Número de opiniones</span>
              <span class="info-value">${product.reviews ? product.reviews.length : 0}</span>
            </div>
          </div>

          <div class="actions">
            <button class="btn btn-primary">Comprar ahora</button>
            <button class="btn btn-secondary" onclick="history.back()">Volver</button>
          </div>
        </div>
        <div class="card product-image-card">
          <div class="product-image-wrapper">
            <img
              class="product-image"
              src="${product.images[0]}"
              alt="${product.title}"
            />
          </div>
        </div>`;
  return html;
}

const renderProductsDetalleReviews = (reviews) => {
  let html = "";
  if (!reviews || reviews.length === 0) {
        html+= `
          <div class="empty-reviews">
            Este producto todavía no tiene opiniones.
          </div>
        `;
      } else {
        html += `
          <div class="reviews-grid">
          ${reviews.map(review => `
            <article class="review-card">
              <div class="review-top">
                <span class="reviewer-name">${review.reviewerName}</span>
                <span class="review-rating">⭐ ${review.rating} / 5</span>
              </div>

              <p class="review-comment">${review.comment}</p>

              <div class="review-footer">
                <span>${formatDate(review.date)}</span>
                <span>${review.reviewerEmail}</span>
              </div>
            </article>
          `).join("")}
        </div>
        `;
      }
  return html;
}

function calculateAverageRating(reviews) {
      if (!reviews || reviews.length === 0) return 0;
      const total = reviews.reduce((acc, review) => acc + review.rating, 0);
      return (total / reviews.length).toFixed(1);
    }
    
function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    }

export const renderHtml = (products) => {
  return `
<html>
  ${headHtml("Mercado de oportunidades")}
  <body>
    ${header()}
    <main class="main">
    <section class="products-grid" id="productsGrid">
      ${renderProducts(products)}
    </section>
  </main>
  ${footer()}
  </body>
</html>`;
};

export const renderHtmlDetalle = (product) => {
  return `
<html>
  ${headHtmlDetalle("Detalle de producto")}
  <body>
    ${header()}
    <main class="main">
    <section class="product-detail" id="productDetail">
     ${renderProductsDetalle(product)}
    </section>

    <section class="reviews-section">
      <h2 class="section-title">Opiniones de clientes</h2>
      <div id="reviewsContainer">
        ${renderProductsDetalleReviews(product.reviews)}
      </div>
    </section>
  </main>
  ${footer()}
  </body>
</html>`;
};