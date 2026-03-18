import { Product } from "./products.js";

const head = (title) => `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      background: #f4f6f9;
      color: #1f2937;
    }

    /* HEADER */
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    }

    .header-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 18px 24px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
    }

    .logo-area {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-img {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 22px;
      font-weight: bold;
      box-shadow: 0 6px 18px rgba(37, 99, 235, 0.25);
    }

    .logo-text {
      font-size: 15px;
      font-weight: 700;
      color: #374151;
    }

    .header-title {
      text-align: center;
      font-size: 28px;
      font-weight: 700;
      color: #111827;
      letter-spacing: 0.3px;
    }

    .profile-area {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .profile-icon {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .profile-icon:hover {
      background: #e5e7eb;
      transform: scale(1.03);
    }

    .profile-icon svg {
      width: 24px;
      height: 24px;
      fill: #4b5563;
    }

    /* MAIN */
    .main {
      max-width: 1400px;
      margin: 0 auto;
      padding: 32px 24px 50px;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px;
    }

    /* CARD */
    .product-card {
      background: #ffffff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      display: flex;
      flex-direction: column;
      border: 1px solid #eef2f7;
    }

    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
    }

    .product-image-wrapper {
      width: 100%;
      height: 240px;
      background: #f9fafb;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-bottom: 1px solid #f1f5f9;
    }

    .product-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .product-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex-grow: 1;
    }

    .product-title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      line-height: 1.4;
      min-height: 50px;
    }

    .product-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 4px;
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 15px;
      color: #4b5563;
    }

    .meta-label {
      font-weight: 600;
      color: #374151;
    }

    .price {
      color: #059669;
      font-weight: 700;
      font-size: 18px;
    }

    .rating {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
      color: #f59e0b;
    }

    .brand {
      font-weight: 600;
      color: #2563eb;
    }

    .product-button {
      margin-top: auto;
      padding: 13px 18px;
      border: none;
      border-radius: 12px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .product-button:hover {
      opacity: 0.95;
      transform: translateY(-1px);
      box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
    }

    /* RESPONSIVE */
    @media (max-width: 1200px) {
      .products-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 900px) {
      .header-container {
        grid-template-columns: 1fr;
        gap: 16px;
        text-align: center;
      }

      .logo-area,
      .profile-area {
        justify-content: center;
      }

      .products-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .header-title {
        font-size: 22px;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .product-image-wrapper {
        height: 220px;
      }
    }
  </style>
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

const renderProducts = (products) => {
  let html = "";
  for (const product of products) {
    html += `<article class="product-card">
          <div class="product-image-wrapper">
            <img
              class="product-image"
              src="${product.images[0]}"
              alt="${product.title}"
            />
          </div>

          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>

            <div class="product-meta">
              <div class="meta-row">
                <span class="meta-label">Precio:</span>
                <span class="price">${product.price.toFixed(2)} €</span>
              </div>

              <div class="meta-row">
                <span class="meta-label">Rating:</span>
                <span class="rating">⭐ ${product.rating}</span>
              </div>

              <div class="meta-row">
                <span class="meta-label">Marca:</span>
                <span class="brand">${product.brand}</span>
              </div>
            </div>

            <button class="product-button">Ver más...</button>
          </div>
        </article>`;
  }
  return html;
}

export const render = (products) => {
  return `
<html>
  ${head("Mercado de oportunidades")}
  <body>
    ${header()}
    <main class="main">
    <section class="products-grid" id="productsGrid">
      ${renderProducts(products)}
    </section>
  </main>
  </body>
</html>`;
};