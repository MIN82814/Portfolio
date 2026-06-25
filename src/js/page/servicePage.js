const serviceMenuContent = [
  {
    name: "GRAPHIC",
    zhTitle: "平面設計",
    iconName: "format_color_fill",
    serviceContent: [
      {
        number: "1",
        title: "需求訪談與視覺定位",
        content: "深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。",
      },
      {
        number: "2",
        title: "概念發展與方案提案",
        content: "將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌獨特魅力。",
      },
      {
        number: "3",
        title: "匠心編排與細節校正",
        content: "針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。",
      },
      {
        number: "4",
        title: "專業檔案交付結案",
        content: "提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。",
      },
    ],
  },
  {
    name: "WEBSITE",
    zhTitle: "網頁設計",
    iconName: "screenshot_monitor",
    serviceContent: [
      {
        number: "1",
        title: "網站架構與原型規劃",
        content: "梳理網站功能需求與使用者故事，規劃資訊架構並繪製 Wireframe，確保流暢的網頁動線與體驗。",
      },
      {
        number: "2",
        title: "視覺 UI 設計與提案",
        content: "依據品牌定位進行網頁視覺風格設計（Mockup），針對色彩、字體與元件組件提供高擬真的畫面提案。",
      },
      {
        number: "3",
        title: "多端響應與動效優化",
        content: "細緻校正電腦、平板、手機等不同尺寸的斷點排版，並規劃符合直覺的微互動與動態效果。",
      },
      {
        number: "4",
        title: "設計規範與組件交付",
        content: "整理完整的 UI Design System 規範與標註檔案（如 Figma 連結），以便與開發團隊進行完美對接。",
      },
    ],
  },
  {
    name: "FRONTEND",
    zhTitle: "前端切版",
    iconName: "web",
    serviceContent: [
      {
        number: "1",
        title: "設計稿解析與語意規劃",
        content: "深度評估 UI 設計稿，規劃符合 W3C 規範的 HTML5 語意化結構，並規劃現代化的 CSS/SCSS 架構。",
      },
      {
        number: "2",
        title: "響應式切版與靜態建置",
        content: "運用 Flexbox 與 Grid 進行高還原度的 RWD 網頁切版，確保各家瀏覽器（Chrome, Safari 等）皆能完美呈現。",
      },
      {
        number: "3",
        title: "互動效果與 JS 控制",
        content: "透過 Vanilla JS 撰寫原生互動邏輯（如手風琴、分頁切換），並結合監聽優化，確保網頁無卡頓。",
      },
      {
        number: "4",
        title: "效能最佳化與整合打包",
        content: "壓縮圖片與程式碼，提升網頁加載速度，並透過打包工具（如 Vite）處理封裝，提供乾淨、好維護的原始碼。",
      },
    ],
  },
  {
    name: "BACKEND",
    zhTitle: "後端開發",
    iconName: "data_table",
    serviceContent: [
      {
        number: "1",
        title: "系統架構與資料庫設計",
        content: "分析業務需求，進行關聯式或非關聯式資料庫的綱要（Schema）設計，規劃高效能且安全的系統架構。",
      },
      {
        number: "2",
        title: "API 開發與商業邏輯處理",
        content: "遵循 RESTful 規範設計並開發後端 API 核心邏輯，確保資料傳輸格式（JSON）結構清晰且嚴謹。",
      },
      {
        number: "3",
        title: "權限驗證與安全防護",
        content: "實作使用者註冊登入與 Token 驗證機制，並針對常見漏洞（如 SQL 注入、XSS）進行主動防禦防範。",
      },
      {
        number: "4",
        title: "API 文件撰寫與部署",
        content: "編寫完整清晰的 Swagger API 技術文件供前端對接，並完成雲端伺服器環境部署與資料庫上線測試。",
      },
    ],
  },
];

function createMenuHTML(menuData) {
  return menuData
    .map((service, index) => {
      const activeClass = index === 0 ? "active" : "";
      return `
        <li>
          <button type="button" class="menu-btn ${activeClass}" data-index="${index}">
            <span class="material-symbols-outlined mb-3 mb-md-1">${service.iconName}</span>
            <p class="fs-heading-xxxs fs-md-heading-xxxxs">${service.name}</p>
            <h4 class="fs-heading-md fs-md-heading-sm">${service.zhTitle}</h4>
          </button>
        </li>`;
    })
    .join("");
}

function bindMenuClickEvents(menuContainer, menuData) {
  const buttons = menuContainer.querySelectorAll(".menu-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const clickedIndex = btn.dataset.index;
      const targetSteps = menuData[clickedIndex].serviceContent;
      renderServiceSteps(targetSteps);
    });
  });
}

export function renderServiceMenu() {
  const serviceMenuList = document.querySelector(".service-menu-list");
  if (!serviceMenuList) return; // 安全檢查

  // 💡 A. 透過小助手產生 HTML 並塞入
  serviceMenuList.innerHTML = createMenuHTML(serviceMenuContent);

  // 💡 B. 初始化：預設直接渲染第一個服務的步驟
  renderServiceSteps(serviceMenuContent[0].serviceContent);

  // 💡 C. 透過小助手綁定點擊事件
  bindMenuClickEvents(serviceMenuList, serviceMenuContent);
}

export function renderServiceSteps(stepsData) {
  const serviceStepsContent = document.querySelector(".service-steps-content");
  if (!serviceStepsContent) return;

  serviceStepsContent.innerHTML = stepsData
    .map(
      (step) => `
      <li class="d-flex gap-5">
        <div class="circle">
          <p class="circle-number">${step.number}</p>
          <span class="circle-line"></span>
        </div>
        <div class="text-neutral-0">
          <h2 class="fs-heading-md fs-md-heading-sm mb-3">${step.title}</h2>
          <p class="fs-para-md fs-md-para-sm">${step.content}</p>
        </div>
      </li>`,
    )
    .join("");
}

// 服務案例
import { projectContent } from "../components/projectsCard";
const serviceCaseList = document.querySelector(".service-case-list");
export function renderServiceCase(data = projectContent) {
  const caseList = data
    .map((item) => {
      return ` <li class="service-case">
              <a
                class="service-case-card"
                href=""
              >
                <div class="card-img">
                  <img
                    src=${item.bgImg}
                  />
                </div>
                <div class="d-flex flex-md-column">
                  <ul class="breadcrumb fs-para-md fs-md-para-sm d-flex  mr-auto">
                  ${item.tag.map((t) => `<li>${t}</li>`).join("")}
                  </ul>
                  <time
                    class="fs-para-sm fs-md-para-xs order-md-first mb-md-1"
                    datetime="2022-10-16"
                    >Oct 16, 2022</time
                  >
                </div>
                <h4 class="fs-heading-sm fs-md-heading-xs">${item.title}</h4>
                <div class="d-flex justify-content-between align-items-center gap-20">
                  <p class="fs-para-md fs-md-para-sm">${item.subtitle}</p>
                  <div class="arrow-btn arrow-btn-primary align-self-center">
                    <span class="material-symbols-outlined">arrow_outward</span>
                  </div>
                </div>
              </a>
            </li>`;
    })
    .join("");

  serviceCaseList.innerHTML = caseList;
}

// 常見問題

const serviceQaContent = [
  {
    number: "01",
    title: "設計提案後包含幾次修改機會？",
    content:
      "沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。",
  },
  {
    number: "02",
    title: "結案時我會收到哪些格式的檔案？",
    content:
      "沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。",
  },
  {
    number: "03",
    title: "平面設計的成果，未來能直接應用在網頁嗎？",
    content:
      "沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。",
  },
  {
    number: "04",
    title: "完成一套完整的設計流程需要多久",
    content:
      "視專案複雜度而定，一般約需 10 到 14 個工作日。透過嚴格執行的「四步驟流程」，我們能確保每個階段都有明確的進度產出，有效避免時程延宕。若有特定的上線期限，歡迎在訪談階段提出，我會為您評估最合適的排程。",
  },
];
const qaList = document.querySelector(".qa-list");

function createQATemplate(qa) {
  return `
    <li class="qa-card" data-id="${qa.number}">
      <div class="qa-title fs-heading-xxs fs-md-heading-xxxs">
        <h4>${qa.number}</h4>
        <h4 class="mr-auto">${qa.title}</h4>
        <span class="material-symbols-outlined"> keyboard_arrow_down </span>
      </div>
      <div class="qa-content">
        <p class="fs-para-md fs-md-para-sm">
          ${qa.content}
        </p>
      </div>
    </li>
  `;
}
function bindQAEvents(qaContainer) {
  const cards = qaContainer.querySelectorAll(".qa-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
}

export function renderServiceQA() {
  const qaList = document.querySelector(".qa-list");
  const listHTML = serviceQaContent.map(createQATemplate).join("");

  qaList.innerHTML = listHTML;

  bindQAEvents(qaList);
}
