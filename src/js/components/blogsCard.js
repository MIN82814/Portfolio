const commonContent = [
  {
    type: "lead",
    text: "從像素到程式碼，探討 AI 如何成為數位職人的最強外掛，在美學與邏輯的交界處創造全新價值。",
  },
  {
    type: "section",
    heading: "視覺想像力的無限延伸：從 Moodboard 到驚艷視覺",
    text: "以往在發想專案視覺風格時，往往受限於素材搜尋的耗時或手繪草圖的限制。現在，透過 Midjourney 或 DALL-E 等工具，我能在幾分鐘內產出數十種具備極致美感的配色方案與佈局可能性。這並非取代設計師的審美，而是將我們從繁瑣的執行工作中解放，轉而擔任「視覺策展人」的角色，從龐大的 AI 提案中精煉出最契合品牌魂魄的視覺語言。",
  },
  {
    type: "image",
    imgUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_content_1.png?raw=true",
    caption: "利用 AI 快速生成的品牌視覺概念圖，能有效縮短與客戶在初期的溝通成本。",
  },
  {
    type: "quote",
    title: "我認為",
    quoteText: "AI 不會取代設計師，但那些懂得與 AI 協作的人，將會定義下一個世代的設計標準",
  },
  {
    type: "section",
    heading: "工作流的重塑：當設計稿與程式碼無縫銜接",
    text: "身為前端工程師，最挑戰的環節往往是將精美的設計稿「精準轉譯」為流暢的程式碼。AI 的介入讓這個轉譯過程變得前所未有的流暢。無論是自動產生複雜的 CSS 佈局、建構 React 元件邏輯，還是優化響應式斷點，AI 就像是一位全天候待命的技術助理，讓我們能將精力集中在更高維度的互動體驗設計與產品效能優化。",
  },
  {
    type: "image",
    imgUrl: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_content_2.png?raw=true",
    caption: "AI 輔助生成的 Clean Code 結構，顯著提升開發整潔度。",
  },
  {
    type: "section",
    heading: "跨領域利器：精選 AI 工具的實戰應用對比",
    text: "在數位職人的工具箱中，選擇正確的武器至關重要。為了讓大家在開發與設計的混合戰場中更具效率，我整理了一份實戰應用對比表。這份表格不僅是基於工具的功能，幕後更是從我這十年的實務經驗出發，評估各項工具在實際專案中的落地價值與學習門檻，協助你快速找到最適合自己的 AI 隊友。",
  },
  {
    type: "table",
    heading: "2026 數位職人必備 AI 工具效能對比表",
    headers: ["工具名稱", "應用範疇", "核心優勢", "學習曲線"],
    rows: [
      {
        name: "Midjourney",
        scope: "視覺構思",
        advantage: "創意發想極致，適合風格探索與氛圍圖生成",
        curve: "中高",
      },
      {
        name: "Figma AI",
        scope: "UI 設計",
        advantage: "直接整合於設計稿，快速生成組件與圖表",
        curve: "低",
      },
      {
        name: "GitHub Copilot",
        scope: "程式開發",
        advantage: "邏輯代碼預測準確，減少重複性標籤撰寫",
        curve: "中",
      },
      {
        name: "Claude",
        scope: "程式邏輯",
        advantage: "具備強大文脈理解力，能優化用戶流程",
        curve: "中",
      },
    ],
  },
  {
    type: "paragraph",
    text: "AI 的崛起並非數位職涯的終點，而是另一個高峰的起點。對於喜歡把美學與程式結合的我們來說，這是一個最好的時代。AI 給了我們更強大的雙翼，讓我們能飛得更高、看見更遠的設計地平線。保持好奇心，持續優化你的 Prompt，讓技術為藝術服務，創造出更多令人驚艷的作品。",
  },
];

export const blogContent = [
  {
    imgSrc: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_1.png?raw=true",
    tags: ["UIUX 設計", "網頁設計", "前端技術"],
    title: "網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率",
    link: "#",
    content: commonContent,
  },
  {
    imgSrc: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true",
    tags: ["UIUX 設計", "設計規範", "前端技術"],
    title: "10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統",
    link: "#",
    content: commonContent,
  },
  {
    imgSrc: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true",
    tags: ["品牌設計", "平面設計", "UIUX 設計"],
    title: "從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯",
    link: "#",
    content: commonContent,
  },
  {
    imgSrc: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_4.png?raw=true",
    tags: ["UIUX 設計", "前端技術", "AI 趨勢應用"],
    title: "當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力",
    link: "#",
    content: commonContent,
  },
  {
    imgSrc: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true",
    tags: ["前端技術", "後端架構", "後端架構"],
    title: "揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性",
    link: "#",
    content: commonContent,
  },
];

export function renderBlogsVertical(data = blogContent) {
  const blogContainer = document.querySelector(".blog-list-vertical");
  if (!blogContainer) return;

  const blogsHTML = data
    .map((blog, index) => {
      const articleId = blog.originalId !== undefined ? blog.originalId : index;

      return `
        <li class="blog-card-vertical" 
            data-aos="fade-down" 
           
        >
          <a class="blog-content" href="blog.html?id=${articleId}">
            <div class="blog-img"><img src="${blog.imgSrc}" alt="${blog.title}" /></div>
            
            <ul class="d-flex breadcrumb fs-para-md fs-md-para-sm">
              ${blog.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
            
            <h5 class="fs-heading-sm fs-md-heading-xs">${blog.title}</h5>
            
            <div class="d-flex gap-md-2 justify-content-between ">
              <time class="fs-para-sm fs-md-para-xs" datetime="2022-10-16">
                Oct 16, 2022
              </time>
              <ul class="d-flex gap-3 gap-md-2">
                <li class="d-flex align-items-center">
                  <span class="material-symbols-outlined mr-1">visibility</span>
                  <p class="fs-para-sm fs-md-para-xs">110 views</p>
                </li>
                <li class="d-flex align-items-center">
                  <span class="material-symbols-outlined mr-1">share</span>
                  <p class="fs-para-sm fs-md-para-xs">2 shares</p>
                </li>
              </ul>
            </div>
          </a>
        </li>
      `;
    })
    .join("");

  blogContainer.innerHTML = blogsHTML;
}

export function renderBlogHorizontal(data = blogContent) {
  const blogListHorizontal = document.querySelector(".blog-list-horizontal");
  if (!blogListHorizontal) return;

  if (data.length === 0) {
    blogListHorizontal.innerHTML = `<li class="fs-para-md text-center py-5">目前沒有相關分類的文章。</li>`;
    return;
  }

  const blogContainer = data.map((card, index) => {
    const articleId = card.originalId !== undefined ? card.originalId : index;

    return `     <li class="blog-card-horizontal" 
                    data-aos="fade-down" 
                
                >
                  <a
                    class="d-flex flex-md-column"
                    href="blog.html?id=${articleId}"
                  >
                    <div class="card-hero">
                      <img
                        src="${card.imgSrc}"
                        alt="blogImg"
                      />
                    </div>
                    <div class="blog-content">
                      <ul class="breadcrumb d-flex fs-para-md fs-md-para-xs">
                        ${card.tags
                          .map((t) => {
                            return `<li>${t}</li>`;
                          })
                          .join("")}
                      </ul>
                      <h2 class="fs-heading-sm fs-md-heading-xs">
                        ${card.title}
                      </h2>
                      <div class="d-flex gap-md-2 align-items-center justify-content-between">
                        <time
                          class="fs-para-sm fs-md-para-xs"
                          datetime="2022-10-16"
                        >
                          Oct 16, 2022
                        </time>
                        <ul class="d-flex gap-3 gap-md-2">
                          <li class="d-flex align-items-center">
                            <span class="material-symbols-outlined mr-1">visibility</span>
                            <p class="fs-para-sm fs-md-para-xs">110 views</p>
                          </li>
                          <li class="d-flex align-items-center">
                            <span class="material-symbols-outlined mr-1">share</span>
                            <p class="fs-para-sm fs-md-para-xs">2 shares</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </li>`;
  });

  blogListHorizontal.innerHTML = blogContainer.join("");
}
