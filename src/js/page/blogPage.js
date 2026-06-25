import { blogContent } from "../components/blogsCard";
export function initBlogDetailPage() {
  const articleDOM = document.querySelector(".blog-detail");
  const tagsDOM = document.querySelector(".blog-container .breadcrumb");
  const breadcrumbLastLI = document.querySelector(".blog-breadcrumb .current-title");

  if (!articleDOM) return;

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get("id")) || 0;
  const currentBlog = blogContent[blogId];

  if (!currentBlog) return;

  if (tagsDOM) {
    tagsDOM.innerHTML = currentBlog.tags.map((tag) => `<li>${tag}</li>`).join("");
  }

  if (breadcrumbLastLI) {
    breadcrumbLastLI.textContent = currentBlog.title;
  }

  // 3. 找出 lead 資料（副標題）
  const leadItem = currentBlog.content.find((item) => item.type === "lead");

  // 4. 組裝主標題區塊 HTML
  let headerHTML = `
    <div class="blog-main-title">
      <h1 class="fs-heading-xxl fs-md-heading-md">
        ${currentBlog.title}
      </h1>
      <h3 class="fs-heading-sm fs-md-heading-xxs">
        ${leadItem ? leadItem.text : ""}
      </h3>
      <p>
        在跨入 UI/UX 與前端領域的第十年，我見證了無數技術更迭，但 AI 的出現無疑是最具衝擊性的一場革命。本文將深度解析資深設計師如何將生成式 AI 整合進現有工作流，透過 AI 釋放視覺想像力，並利用智慧化工具優化前端開發效率，實踐美學與技術的完美共生。
      </p>
    </div>
  `;

  // 5. 遍歷渲染內文各元件
  const bodyHTML = currentBlog.content
    .map((item) => {
      switch (item.type) {
        case "section":
          return `
          <div class="blog-section">
            <h2 class="mt-4 mt-md-2 fs-heading-sm">${item.heading}</h2>
            <p class="fs-para-md">${item.text}</p>
          </div>
        `;
        case "image":
          return `
          <div>
            <img src="${item.imgUrl}" alt="${item.caption}" class="mt-4 mt-md-2" />
            <p>${item.caption}</p>
          </div>
        `;
        case "quote":
          return `
          <div class="blog-quote">
            <p class="quote-title">${item.title}</p>
            <h3 class="fs-heading-xs fs-heading-xxxs">${item.quoteText}</h3>
          </div>
        `;
        case "table":
          return `
          <div class="blog-table-container">
            <h3 class="mt-4 mt-md-2 fs-heading-sm fs-md-heading-xxs">${item.heading}</h3>
            <table class="blog-custom-table">
              <thead>
                <tr>${item.headers.map((th) => `<th>${th}</th>`).join("")}</tr>
              </thead>
              <tbody>
                ${item.rows
                  .map(
                    (row) => `
                  <tr>
                    <td><strong>${row.name}</strong></td>
                    <td>${row.scope}</td>
                    <td>${row.advantage}</td>
                    <td>${row.curve}</td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        `;
        case "paragraph":
          return `
          <div class="blog-conclusion">
            <p>${item.text}</p>
          </div>
        `;
        default:
          return "";
      }
    })
    .join("");

  // 6. 抓取原本 HTML 尾端的分享元件，避免被覆蓋清空
  const existingFooter = articleDOM.querySelector(".blog-footer");
  const footerHTML = existingFooter ? existingFooter.outerHTML : "";

  // 7. 寫入 DOM
  articleDOM.innerHTML = headerHTML + bodyHTML + footerHTML;
}
