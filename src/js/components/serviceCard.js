export const serviceCardContent = [
  {
    zhTitle: "前端開發",
    iconName: "screenshot_monitor",
    skills: [
      {
        title: "React.js",
        content:
          "具備 React 開發實務經驗，<strong>Hooks、元件化架構</strong>設計與狀態管理模式，能規劃高可維護性與高重用性的前端應用架構。",
      },
      {
        title: "Redux Toolkit",
        content: "全域狀態管理與資料流控管。",
      },
      {
        title: "React Router",
        content: "前端路由規劃與頁面切換邏輯。",
      },
      {
        title: "JavaScript (ES6+)",
        content: "非同步處理、DOM 操作與資料邏輯拆解。",
      },
      {
        title: "API 資料串接",
        content:
          "具備前後端整合經驗，<strong>Axios 串接 RESTful API </strong>、資料轉換處理、錯誤攔截與例外管理機制。",
      },
      {
        title: "Chart.js",
        content: "數據視覺化開發經驗。",
      },
    ],
  },
  {
    zhTitle: "介面切版實作",
    iconName: "web",
    skills: [
      {
        title: "RWD 響應式網頁",
        content:
          "具備多年企業網站切版經驗，<strong>熟悉跨裝置與跨瀏覽器相容性設計</strong>，能確保最佳使用體驗。 ",
      },
      {
        title: "Bootstrap5 / SCSS",
        content:
          "CSS 架構規劃與樣式模組化管理，具備<strong>專案樣式維護與元件化開發</strong>經驗。",
      },
      {
        title: "動態特效與互動",
        content:
          "具備動畫與互動效果開發經驗， <strong>Swiper、AOS、SVG、Animation、Icon Font</strong> 等前端技術應用。",
      },
      {
        title: "UI/UX 轉譯",
        content:
          "能與 UI／UX 設計師協作，將設計稿高品質轉譯為實際產品介面，兼顧美觀性、互動性與開發效率。",
      },
      {
        title: "系統維護與優化",
        content:
          "具備既有<strong>網站維護</strong>、跨瀏覽器相容性與效能調整經驗。",
      },
    ],
  },
  {
    zhTitle: "設計工具/開發流程",
    iconName: "format_color_fill",
    skills: [
      {
        title: "Figma",
        content: "熟悉設計交付流程，能快速理解設計規格並與設計團隊有效協作。",
      },
      {
        title: "Adobe Photoshop / Illustrator",
        content: "具備平面設計背景與良好視覺敏銳度。",
      },
      {
        title: "Git / GitHub",
        content:
          "Git Flow 開發流程、版本控管與團隊協作模式，具備 <strong>Pull Request 與分支管理實務經驗。</strong>",
      },
      {
        title: "開發環境建置",
        content:
          "熟悉 NPM、Vite 等前端建置工具與開發流程，具備專案建置與維護經驗。",
      },
      {
        title: "Google Tag Manager (GTM)",
        content: "具備網站追蹤機制建置經驗，可協助行銷數據蒐集與成效分析。",
      },
    ],
  },
];

export function serviceCard() {
  const serviceContainer = document.querySelector(".service-list");

  if (!serviceContainer) return;

  const cardsHTML = serviceCardContent
    .map(
      (item, index) => ` 
    <li class="service-card-link" 
        data-aos="fade-right"
        data-aos-delay="${index * 100}"
    >
      <div class="p-5 p-md-3">
        <div class="d-flex justify-content-between mb-4 mb-md-2">
          <div>
            <h4 class="fs-heading-md fs-md-heading-sm">${item.zhTitle}</h4>
          </div>
          <span class="material-symbols-outlined">${item.iconName}</span>
        </div>
        
        <div class="d-flex flex-column gap-3 mt-auto">
     ${
       item.skills
         ? item.skills
             .map(
               (skill) => `
            <div class="gap-3">
              <h4 class="fs-heading-xxs fs-md-heading-xxxs mb-0 text-nowrap text-primary-600" ">
                ${skill.title}
              </h4>
              <p class="fs-para-md fs-md-para-sm mb-0 text-neutral-600 flex-grow-1">
                ${skill.content}
              </p>
            </div>
          `,
             )
             .join("")
         : ""
     }
        </div>

      </div>
    </li>
  `,
    )
    .join("");
  serviceContainer.innerHTML = cardsHTML;
}
