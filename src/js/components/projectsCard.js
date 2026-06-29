export const projectContent = [
  {
    id: "project-001", 
    date: "Mar, 2026",
    dateAttr: "2026-03",
    tag: ["React 前端開發", "團隊協作專案"],
    title: "觀葉森活 電商專案",
    subtitle: "與團隊共同開發植物主題電商網站，提供商品瀏覽、購物流程、文章閱讀與會員管理等功能。專案採用 React 建立前後台系統，透過 RESTful API 串接資料，並以 Git Flow 進行團隊協作開發。",
    bgImg: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1.png?raw=true",
    mobileBgImg: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1-mobile.png?raw=true",
    modal: {
      heroImage: "https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/project_1-hero.jpg?raw=true",
      intro: "與團隊共同開發植物主題電商網站，提供商品瀏覽、購物流程、文章閱讀與會員管理等功能。專案採用 React 建立前後台系統，透過 RESTful API 串接資料，並以 Git Flow 進行團隊協作開發。",
      technologies: ["React", "Redux Toolkit", "Axios", "Bootstrap 5"],
      links: {
        github: "https://github.com/MIN82814/leafAndHome",
        demo: "https://min82814.github.io/leafAndHome/",
        responsiblePages: [
          { name: "文章列表頁", url: "https://min82814.github.io/leafAndHome/#/articles" },
          { name: "單一文章頁", url: "https://min82814.github.io/leafAndHome/#/articles/-OjFbN8au2K1LWeWt0Vp" }
        ],
        videos: [
          { title: "文章列表頁", url: "https://github.com/MIN82814/leafAndHome/blob/main/docs/article-list.gif" },
          { title: "單一文章頁", url: "https://github.com/MIN82814/leafAndHome/blob/main/docs/article-detail.gif" }
        ]
      },
      responsibilities: [
        "✦ 3 個文章前後台模組開發，包含文章列表頁、單篇文章頁與後台文章管理頁， RWD 介面設計與互動功能實作。",
        "✦ 串接 8 支文章模組 RESTful API，透過 API service 模組化管理前台文章資料、後台 CRUD 與圖片上傳流程，並負責 API 回傳資料整合與畫面呈現。",
        "✦ 採用 React 元件化開發模式，將文章頁拆分為 Hero、文章內容、相關商品、相關文章、電子報與留言等功能元件，提升結構清晰度與維護性。",
        "✦ 文章搜尋、標籤篩選與分頁功能，透過 React state 管理搜尋條件與頁碼，完成前端資料篩選、排序與分頁邏輯。",
        "✦ 整合 Mailchimp 電子報訂閱表單，完成第三方訂閱服務導入。",
        "✦ 開發 Loading 與 Pagination 共用元件，提升跨頁面重用性與維護效率。",
        "✦ 與 4 人團隊協作，採用 Git Flow 策略與 Pull Request 進行開發，共同參與版本控管與功能整合流程。"
      ],
      contentImages: "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_modal_pic.png?raw=true"
    }
  }
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
// 💡 這個函式只專心拿「一筆專案的資料」來填空
function renderModalContent(project) {
  // 1. 伸手去 HTML 裡面，把剛剛準備好的空格子通通抓出來
  const modalHero = document.querySelector(".modal-hero");
  const techTagsList = document.querySelector(".modal-tech-tags");
  const timeTag = document.querySelector(".modal-time");
  const title = document.querySelector(".modal-title");
  const subtitle = document.querySelector(".modal-subtitle");
  const introText = document.querySelector(".modal-intro-text");
  const linksContainer = document.querySelector(".modal-links");
  const pagesContainer = document.querySelector(".modal-pages-container");
  const videosListContainer = document.querySelector(".modal-videos-list");
  const responsibilitiesList = document.querySelector(".modal-responsibilities");
  const contentImg = document.querySelector(".modal-content-img");

  // 2. 開始把 project 資料庫裡的食材，一一填入空格
  
  // 填大圖的網址與替代文字
  if (modalHero) {
    modalHero.src = project.modal.heroImage; // 💡 結構變超好讀！直接點 modal 
    modalHero.alt = project.title;
  }

  // 填時間
  if (timeTag) {
    timeTag.setAttribute("datetime", project.dateAttr);
    timeTag.textContent = project.date;
  }

  // 填標題與內文
  if (title) title.textContent = project.title;
  if (subtitle) subtitle.textContent = project.subtitle;
  if (introText) introText.textContent = project.modal.intro;

  // 填技術標籤 (使用你最拿手的 .map 和 .join)
  if (techTagsList && project.modal.technologies) {
    techTagsList.innerHTML = project.modal.technologies
      .map((tech) => `<li>${tech}</li>`)
      .join("");
  }

  // 填相關連結 (如果有寫 GitHub 或 Demo 網址，才渲染出來)
  if (linksContainer && project.modal.links) {
    let linksHtml = "";
    if (project.modal.links.github) {
      linksHtml += `<a href="${project.modal.links.github}" target="_blank" class="me-3">專案連結 github &gt;&gt;</a>`;
    }
    if (project.modal.links.demo) {
      linksHtml += `<a href="${project.modal.links.demo}" target="_blank">專案 Demo &gt;&gt;</a>`;
    }
    linksContainer.innerHTML = linksHtml; // 塞進 HTML
  }
//負責專案連結
//開始動態渲染負責頁面按鈕
  if (pagesContainer) {
    // 💡 安全檢查：確保資料裡有寫 responsiblePages 陣列才跑迴圈
    if (project.modal.links && project.modal.links.responsiblePages) {
      pagesContainer.innerHTML = project.modal.links.responsiblePages
        .map((page) => {
          // 迴圈把每個頁面的名字跟網址拿出來，做成精緻的按鈕 HTML
          return `<a href="${page.url}" target="_blank" class="btn btn-neutral fs-md-label-sm">${page.name}</a>`;
        })
        .join(""); 

    } else {
      pagesContainer.innerHTML = "";
    }
  }
// 判斷並使用迴圈渲染多部 GIF 動態圖
  if (videosListContainer) {
    const projectVideos = project.modal.links?.videos;

    if (projectVideos && projectVideos.length > 0) {
      
      videosListContainer.innerHTML = projectVideos
        .map((video) => {
          // 💡 關鍵魔改：把原本的網址自動把 blob 替換成 raw
          const rawUrl = video.url.replace("/blob/", "/raw/");

          return `
            <div class="video-item mb-4">
              <h5 class="fw-bold fs-para-md mb-2 text-secondary"> ${video.title}</h5>
              
              <div class="gif-wrapper mb-2">
                <img 
                  src="${rawUrl}" 
                  alt="${video.title}" 
                  class="img-fluid rounded border shadow-sm w-100" 
                  style="max-height: 450px; object-fit: contain; background-color: #f8f9fa;"
                />
              </div>
            </div>
          `;
        })
        .join("");

    } else {
      videosListContainer.innerHTML = "";
    }
  }
  // 填入 7 點負責內容
  if (responsibilitiesList && project.modal.responsibilities) {
    responsibilitiesList.innerHTML = project.modal.responsibilities
      .map((item) => `<li class="mb-4">${item}</li>`)
      .join("");
  }

  // 填底部細節大圖
  if (contentImg) {
    contentImg.src = project.modal.contentImages;
  }
}
/**
 * 主函式：外部呼叫的 render 接口
 */
export function renderProjects(data = projectContent) {
  const projectContainer = document.querySelector(".project-list");
  const modalPage = document.querySelector(".projectModal-page");

  // 這邊維持原樣（渲染外部卡片）
  projectContainer.innerHTML = data
    .map((project, index) => createProjectTemplate(project, index))
    .join("");

  if (modalPage) {
    initModalEvents(modalPage);
  }

  // 💡 關鍵修改區：卡片的點擊監聽器
  const projectItems = projectContainer.querySelectorAll(".project-content");
  projectItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const projectTitle = e.currentTarget.dataset.id;
      const targetProject = data.find((p) => p.title === projectTitle);

      // 💡 修正後的新邏輯：只要有找到專案，而且畫面上存在彈窗
      if (targetProject && modalPage) {
        
        // 💡 1. 廚師填空：直接把整包乾淨的專案資料丟進去
        renderModalContent(targetProject);

        // 💡 2. 開窗：把 Modal 秀出來
        modalPage.classList.add("is-active");
        modalPage.scrollTop = 0;

        // 💡 3. 鎖死背景
        document.body.style.overflow = "hidden";
      }
    });
  });
}
