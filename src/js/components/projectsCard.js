export const projectContent = [
  {
    date: "Oct 16, 2025",
    dateAttr: "2025-10-16",
    tag: ["React前端開發","網頁切版","視覺設計"],
    title: "品牌視覺與電商整合，多肉植物品牌電商建置",
    subtitle: "從品牌識別設計到 RWD 響應式網站開發，打造療癒系植栽購物體驗",
    bgImg: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1.png?raw=true",
    mobileBgImg:
      "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1-mobile.png?raw=true",
    content: [
      {
        id: "project-001",
        heroImage:
          "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1-hero.jpg?raw=true",
        categories: ["React前端開發","網頁切版","視覺設計"],
        title: "品牌視覺與電商整合，多肉植物品牌電商建置",
        subtitle: "從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗",
        description:
          "我們將大自然的平靜感轉化為數位語彙，透過揉合大地色系與極簡排版，為「PLANTIQUE LIFE」建構出專屬的視覺靈魂。在開發過程中，我們秉持對細節的極致追求，確保從品牌 Logo 到每一個組件的轉場，皆展現像素級的精準。",
        details: ["設計原則：植栽藝術、日系風格、暖陽視覺", "開發方式：Bootstrap、Javascript"],
        contentImages:
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_modal_pic.png?raw=true",
      },
    ],
  },
  {
    date: "Oct 16, 2025",
    dateAttr: "2025-10-16",
    tag: ["網頁切版"],
    title: "數位產品 UI/UX 設計，個人化財務視覺化軟體",
    subtitle: "運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面",
    bgImg: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_2.png?raw=true",
    mobileBgImg:
      "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_2-mobile.png?raw=true",
    content: [
      {
        id: "project-002",
        heroImage:
          "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_2-hero.jpg?raw=true",
        categories: ["網頁切版"],
        title: "數位產品 UI/UX 設計，個人化財務視覺化軟體",
        subtitle: "運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的個人化操作介面",
        description:
          "我們結合人工智能與金融數據，打造直覺的視覺化界面。用戶可以一目了然地掌握個人財務狀況，透過即時分析和智能建議，做出更明智的投資決策。系統架構穩定、反應快速，為用戶提供無縫的金融管理體驗。",
        details: ["設計原則：數據視覺化、使用者友善、即時互動", "開發方式：React、D3.js、API 集成"],
        contentImages:
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_modal_pic.png?raw=true",
      },
    ],
  },
  {
    date: "Oct 16, 2025",
    dateAttr: "2025-10-16",
    tag: ["網頁切版","視覺設計"],
    title: "品牌識別與包裝設計，法式甜點品牌視覺重塑",
    subtitle: "以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象",
    bgImg: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_3.png?raw=true",
    mobileBgImg:
      "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_3-mobile.png?raw=true",
    content: [
      {
        id: "project-003",
        heroImage:
          "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_3-hero.jpg?raw=true",
        categories: ["網頁切版","視覺設計"],
        title: "品牌識別與包裝設計，法式甜點品牌視覺重塑",
        subtitle: "以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象",
        description:
          "我們為法式甜點品牌重新定義視覺形象，融合法式優雅與現代簡潔。從品牌 Logo 到包裝設計，每一個細節都精心打磨。前端頁面採用流暢的動畫效果，後端支持完整的訂單系統，為品牌打造從線上到線下的完整體驗。",
        details: ["設計原則：法式優雅、温暖質感、高級簡約", "開發方式：HTML5、CSS3、Node.js、MongoDB"],
        contentImages:
          "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_modal_pic.png?raw=true",
      },
    ],
  },
  
];

/**
 * 拆分 1：純元件樣版（Template）
 * 職責：只負責吃一筆 project 資料，回傳拼接好的 HTML 字串
 */
function createProjectTemplate(project, index) {
  return `
    <li data-id="${project.title}" 
        class="project-content" 
        data-aos="fade-down"
        data-aos-delay="${index * 80}"
    >
      <a style="--bg-desktop: url('${project.bgImg}'); --bg-mobile: url('${project.mobileBgImg}');">
        
        <div class="project-bg-cover"></div>
        
        <div class="project-text">
          <time class="fs-para-sm fs-md-para-xs" datetime="${project.dateAttr}">
            ${project.date}
          </time>
          <ul class="d-flex breadcrumb">
            ${project.tag.map((t) => `<li class="fs-para-md fs-md-para-sm">${t}</li>`).join("")}
          </ul>
          <h3 class="fs-heading-sm fs-md-heading-xs">${project.title}</h3>
          <h4 class="fs-para-md fs-md-para-sm">${project.subtitle}</h4>
          <button type="button" class="btn btn-neutral">前往專案</button>
        </div>
      </a>
    </li>
  `;
}

/**
 * 拆分 2：Modal 關閉事件監聽器
 * 職責：處理 Modal 關閉按鈕與遮罩點擊，整個網頁初始化時只需要執行一次
 */
function initModalEvents(modalPage) {
  if (!modalPage || modalPage.dataset.eventsInitialized) return;

  const closeBtn = modalPage.querySelector(".modal-close");
  const overlay = modalPage.querySelector(".modal-overlay");

  const closeModal = () => {
    modalPage.classList.remove("is-active");
    // 💡 關鍵：關閉彈窗時，把後面的 body 改回原樣（允許滾動）
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  modalPage.dataset.eventsInitialized = "true";
}

/**
 * 核心 3：精準更新 Modal 的內容
 */
function renderModalContent(project, rawData) {
  const modalHero = document.querySelector(".modal-hero");
  const breadcrumb = document.querySelector(".modal-text .breadcrumb");
  const timeTag = document.querySelector(".modal-text time");
  const title = document.querySelector(".modal-text h2");
  const subtitle = document.querySelector(".modal-text h4");
  const description = document.querySelector(".modal-intro p");
  const detailsList = document.querySelector(".modal-intro ul");
  const contentImg = document.querySelector(".modal-content img");

  if (modalHero) {
    modalHero.src = project.heroImage || rawData.bgImg;
    modalHero.alt = project.title;
  }
  if (breadcrumb && project.categories) {
    breadcrumb.innerHTML = project.categories.map((cat) => `<li>${cat}</li>`).join("");
  }
  if (timeTag) {
    timeTag.setAttribute("datetime", rawData.dateAttr);
    timeTag.textContent = rawData.date;
  }
  if (title) title.textContent = project.title;
  if (subtitle) subtitle.textContent = project.subtitle || "";
  if (description) description.textContent = project.description || "";
  if (detailsList && project.details) {
    detailsList.innerHTML = project.details.map((detail) => `<li>${detail}</li>`).join("");
  }
  if (contentImg) {
    contentImg.src = project.contentImages || "";
  }
}

/**
 * 主函式：外部呼叫的 render 接口
 */
export function renderProjects(data = projectContent) {
  const projectContainer = document.querySelector(".project-list");
  const modalPage = document.querySelector(".projectModal-page");

  projectContainer.innerHTML = data.map((project, index) => createProjectTemplate(project, index)).join("");

  if (modalPage) {
    initModalEvents(modalPage);
  }

  const projectItems = projectContainer.querySelectorAll(".project-content");
  projectItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const projectTitle = e.currentTarget.dataset.id;
      const targetProject = data.find((p) => p.title === projectTitle);

      if (targetProject?.content?.[0] && modalPage) {
        renderModalContent(targetProject.content[0], targetProject);

        modalPage.classList.add("is-active");
        modalPage.scrollTop = 0;

        // 💡 關鍵：打開彈窗時，直接鎖死後面的 body 不讓它滾動
        document.body.style.overflow = "hidden";
      }
    });
  });
}
