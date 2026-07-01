(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`.header-md-menu`),t=document.querySelector(`.header-menu`),n=document.querySelector(`.header-overlay`),r=e?.querySelector(`.material-symbols-outlined`);if(!e||!t||!n||!r)return;function i(i){let a;typeof i==`boolean`?a=i:(t.classList.toggle(`active`),a=t.classList.contains(`active`)),e.classList.toggle(`active`,a),n.classList.toggle(`active`,a),e.setAttribute(`aria-expanded`,String(a)),r.textContent=a?`close`:`menu`}e.addEventListener(`click`,()=>{i()}),n.addEventListener(`click`,()=>{i(!1)})}var t=[{zhTitle:`前端開發`,iconName:`screenshot_monitor`,skills:[{title:`React.js`,content:`具備 React 開發實務經驗，<strong>Hooks、元件化架構</strong>設計與狀態管理模式，能規劃高可維護性與高重用性的前端應用架構。`},{title:`Redux Toolkit`,content:`全域狀態管理與資料流控管。`},{title:`React Router`,content:`前端路由規劃與頁面切換邏輯。`},{title:`JavaScript (ES6+)`,content:`非同步處理、DOM 操作與資料邏輯拆解。`},{title:`API 資料串接`,content:`具備前後端整合經驗，<strong>Axios 串接 RESTful API </strong>、資料轉換處理、錯誤攔截與例外管理機制。`},{title:`Chart.js`,content:`數據視覺化開發經驗。`}]},{zhTitle:`介面切版實作`,iconName:`web`,skills:[{title:`RWD 響應式網頁`,content:`具備多年企業網站切版經驗，<strong>熟悉跨裝置與跨瀏覽器相容性設計</strong>，能確保最佳使用體驗。 `},{title:`Bootstrap5 / SCSS`,content:`CSS 架構規劃與樣式模組化管理，具備<strong>專案樣式維護與元件化開發</strong>經驗。`},{title:`動態特效與互動`,content:`具備動畫與互動效果開發經驗， <strong>Swiper、AOS、SVG、Animation、Icon Font</strong> 等前端技術應用。`},{title:`UI/UX 轉譯`,content:`能與 UI／UX 設計師協作，將設計稿高品質轉譯為實際產品介面，兼顧美觀性、互動性與開發效率。`},{title:`系統維護與優化`,content:`具備既有<strong>網站維護</strong>、跨瀏覽器相容性與效能調整經驗。`}]},{zhTitle:`設計工具/開發流程`,iconName:`format_color_fill`,skills:[{title:`Figma`,content:`熟悉設計交付流程，能快速理解設計規格並與設計團隊有效協作。`},{title:`Adobe Photoshop / Illustrator`,content:`具備平面設計背景與良好視覺敏銳度。`},{title:`Git / GitHub`,content:`Git Flow 開發流程、版本控管與團隊協作模式，具備 <strong>Pull Request 與分支管理實務經驗。</strong>`},{title:`開發環境建置`,content:`熟悉 NPM、Vite 等前端建置工具與開發流程，具備專案建置與維護經驗。`},{title:`Google Tag Manager (GTM)`,content:`具備網站追蹤機制建置經驗，可協助行銷數據蒐集與成效分析。`}]}];function n(){let e=document.querySelector(`.service-list`);e&&(e.innerHTML=t.map((e,t)=>` 
    <li class="service-card-link" 
        data-aos="fade-right"
        data-aos-delay="${t*100}"
    >
      <div class="p-5 p-md-3">
        <div class="d-flex justify-content-between mb-4 mb-md-2">
          <div>
            <h4 class="fs-heading-md fs-md-heading-sm">${e.zhTitle}</h4>
          </div>
          <span class="material-symbols-outlined">${e.iconName}</span>
        </div>
        
        <div class="d-flex flex-column gap-3 mt-auto">
     ${e.skills?e.skills.map(e=>`
            <div class="gap-3">
              <h4 class="fs-heading-xxs fs-md-heading-xxxs mb-0 text-nowrap text-primary-600" ">
                ${e.title}
              </h4>
              <p class="fs-para-md fs-md-para-sm mb-0 text-neutral-600 flex-grow-1">
                ${e.content}
              </p>
            </div>
          `).join(``):``}
        </div>

      </div>
    </li>
  `).join(``))}var r=[{id:`project-001`,date:`Mar, 2026`,dateAttr:`2026-03`,tag:[`React前端開發`,`網頁切版`,`UI 設計與規劃`],title:`觀葉森活 電商專案`,subtitle:`與團隊共同開發植物主題電商網站，提供商品瀏覽、購物流程、文章閱讀與會員管理等功能。專案採用 React 建立前後台系統，透過 RESTful API 串接資料，並以 Git Flow 進行團隊協作開發。`,bgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_hero.png?raw=true`,mobileBgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_mobileHero.png?raw=true`,modal:{heroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_modal_hero.jpg?raw=true`,mobileHeroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_modal_mobileHero.png?raw=true`,introImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_modal_introduce.jpg?raw=true`,intro:`與團隊共同開發植物主題電商網站，提供商品瀏覽、購物流程、文章閱讀與會員管理等功能。專案採用 React 建立前後台系統，透過 RESTful API 串接資料，並以 Git Flow 進行團隊協作開發。`,technologies:[`React`,`React Route`,`Redux Toolkit`,`Axios`,`Bootstrap 5`,`Git / GitHub`],links:{github:`https://github.com/MIN82814/leafAndHome`,demo:`https://min82814.github.io/leafAndHome/`,responsiblePages:[{name:`文章列表頁`,url:`https://min82814.github.io/leafAndHome/#/articles`},{name:`單一文章頁`,url:`https://min82814.github.io/leafAndHome/#/articles/-OjFbN8au2K1LWeWt0Vp`}]},responsibilities:[`✦ 3 個文章前後台模組開發，包含文章列表頁、單篇文章頁與後台文章管理頁， RWD 介面設計與互動功能實作。`,`✦ 串接 8 支文章模組 RESTful API，透過 API service 模組化管理前台文章資料、後台 CRUD 與圖片上傳流程，並負責 API 回傳資料整合與畫面呈現。`,`✦ 採用 React 元件化開發模式，將文章頁拆分為 Hero、文章內容、相關商品、相關文章、電子報與留言等功能元件，提升結構清晰度與維護性。`,`✦ 文章搜尋、標籤篩選與分頁功能，透過 React state 管理搜尋條件與頁碼，完成前端資料篩選、排序與分頁邏輯。`,`✦ 整合 Mailchimp 電子報訂閱表單，完成第三方訂閱服務導入。`,`✦ 開發 Loading 與 Pagination 共用元件，提升跨頁面重用性與維護效率。`,`✦ 與 4 人團隊協作，採用 Git Flow 策略與 Pull Request 進行開發，共同參與版本控管與功能整合流程。`],contentImages:[{title:`單一文章頁 完整版面展示`,url:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_detail-demo.png?raw=true`},{title:`文章列表頁 完整版面展示`,url:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/leafAndHome_list-demo.png?raw=true`}]}},{id:`project-002`,date:`Sep, 2025`,dateAttr:`2025-09`,tag:[`網頁切版`],title:`CASHU 記帳 App`,subtitle:`與 AAPD UI 設計團隊協作開發行動端記帳 App，參與 UI 設計溝通、Figma 設計稿交接與前端介面實作，專案著重行動端操作體驗、介面一致性與元件化開發流程。`,bgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU_hero.png?raw=true`,mobileBgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU_mobileHero.png?raw=true`,modal:{heroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU_modal_hero.jpg?raw=true`,mobileHeroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU_modal_mobileHero.png?raw=true`,introImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU_modal_introduce.jpg?raw=true`,intro:`與 AAPD UI 設計團隊協作開發行動端記帳 App，參與 UI 設計溝通、Figma 設計稿交接與前端介面實作，專案著重行動端操作體驗、介面一致性與元件化開發流程。`,technologies:[`HTML`,`SCSS`,`Bootstrap 5`,`Git / GitHub`,`SVG`],links:{github:`https://github.com/MIN82814/CASHU`,demo:`https://min82814.github.io/CASHU/`,responsiblePages:[{name:`新增紀錄`,url:`https://min82814.github.io/CASHU/log-add.html`},{name:`存錢計畫`,url:`https://min82814.github.io/CASHU/plan-save-detail.html`}]},responsibilities:[`✦ 行動端介面切版與流程實作<br>CASHU 記帳 App「新增紀錄」與「存錢計畫」兩大核心流程開發，完成 7 個行動端頁面的切版與互動介面整合，依據 Figma 設計稿完成 375px 行動端介面呈現。`,`✦ SCSS 架構規劃與共用樣式開發<br>規劃 SCSS 模組化架構，建立底部導覽列、手機外框與共用 UI 樣式，提升樣式一致性與維護性。`,`✦ 模板整合與版型維護<br>採用 Vite 建置多頁式專案，整合 EJS 共用模板管理 Header／Footer，協助團隊維持跨頁面版型一致性與開發效率。`,`✦ Bootstrap 客製化與介面整合<br>客製 Bootstrap SCSS 變數與 utilities，整合 Tab、Offcanvas 等互動元件，並搭配 SVG、Lucide Icons 與 Icon Font 提升介面辨識性與視覺一致性。`,`✦ 跨職能協作與版本控管<br>與 UI 設計師討論介面細節與實作可行性，並與 2 人團隊協作採 Git Flow 與 Pull Request 協作開發及負責功能整合。`],contentImages:[{title:`新增紀錄及存錢計畫頁面 完整版面展示`,url:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/CASHU-demo.png?raw=true`}]}},{id:`project-003`,date:`Sep, 2025`,dateAttr:`2025-09`,tag:[`網頁切版`,`UI 設計與規劃`],title:`Happiness Cookie 甜點電商`,subtitle:`以手工餅乾品牌為主題的多頁式電商網站切版專案，採用 EJS 模板與 SCSS 架構化開發，完成首頁、商品列表、商品詳細頁、購物車、結帳頁與會員中心等介面實作。專案著重於版面規劃、元件拆分、RWD 響應式設計與團隊協作開發流程。`,bgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_hero.png?raw=true`,mobileBgImg:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_mobileHero.png?raw=true`,modal:{heroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_modal_hero.jpg?raw=true`,mobileHeroImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_modal_mobileHero.png?raw=true`,introImage:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_modal_introduce.jpg?raw=true`,intro:`以手工餅乾品牌為主題的多頁式電商網站切版專案，採用 EJS 模板與 SCSS 架構化開發，完成首頁、商品列表、商品詳細頁、購物車、結帳頁與會員中心等介面實作。專案著重於版面規劃、元件拆分、RWD 響應式設計與團隊協作開發流程。`,technologies:[`HTML`,`SCSS`,`Bootstrap 5`,`EJS`,`Vite`,`Git / GitHub`],links:{github:`https://github.com/MIN82814/Happinesscookie`,demo:`https://min82814.github.io/Happinesscookie/`,responsiblePages:[{name:`首頁`,url:`https://min82814.github.io/Happinesscookie/`},{name:`產品詳細頁`,url:`https://min82814.github.io/Happinesscookie/product.html`}]},responsibilities:[`✦ 商品詳細頁 UI 規劃與開發<br>獨立規劃商品詳細頁資訊架構與版面設計，進行 RWD 響應式切版，提升跨裝置瀏覽體驗。`,`✦ 互動元件開發<br>製作商品圖片輪播與顧客評價輪播功能，並整合側邊購物車（Offcanvas）介面與加入購物車後的互動效果，強化購物流程的操作體驗。`,`✦ 共用元件與樣式管理<br>建立共用按鈕元件與 hover／active 互動效果，運用 SCSS 架構化管理樣式，提升介面一致性與後續維護效率。`,`✦ 模板整合與團隊協作<br>參與首頁共同開發整合，與 5 人團隊採用 Git Flow 策略與 Pull Request 進行開發，共同參與版本控管與功能整合流程。`],contentImages:[{title:`首頁頁面 完整版面展示`,url:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie-demo.png?raw=true`},{title:`產品詳細頁面 完整版面展示`,url:`https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/Happinesscookie_detail-demo.png?raw=true`}]}}];function i(e,t){return`
    <li data-id="${e.title}" 
        class="project-content" 
        data-aos="fade-down"
        data-aos-delay="${t*80}"
    >
      <a style="--bg-desktop: url('${e.bgImg}'); --bg-mobile: url('${e.mobileBgImg}');">
        
        <div class="project-bg-cover"></div>
        
        <div class="project-text">
          <time class="fs-para-sm fs-md-para-xs" datetime="${e.dateAttr}">
            ${e.date}
          </time>
          <ul class="d-flex breadcrumb">
            ${e.tag.map(e=>`<li class="fs-para-md fs-md-para-sm">${e}</li>`).join(``)}
          </ul>
          <h3 class="fs-heading-sm fs-md-heading-xs">${e.title}</h3>
          <h4 class="fs-para-md fs-md-para-sm">${e.subtitle}</h4>
          <button type="button" class="btn btn-neutral">前往專案</button>
        </div>
      </a>
    </li>
  `}function a(e){if(!e||e.dataset.eventsInitialized)return;let t=e.querySelector(`.modal-close`),n=e.querySelector(`.modal-overlay`),r=()=>{e.classList.remove(`is-active`),document.body.style.overflow=``};t&&t.addEventListener(`click`,r),n&&n.addEventListener(`click`,r),e.dataset.eventsInitialized=`true`}function o(e){let t=document.querySelector(`.modal-hero`),n=document.querySelector(`.modal-hero-mobile`),r=document.querySelector(`.modal-intro-img`),i=document.querySelector(`.modal-tech-tags`),a=document.querySelector(`.modal-time`),o=document.querySelector(`.modal-title`),s=document.querySelector(`.modal-subtitle`),c=document.querySelector(`.modal-intro-text`),l=document.querySelector(`.modal-links`),u=document.querySelector(`.modal-pages-container`),d=document.querySelector(`.modal-videos-list`),f=document.querySelector(`.modal-responsibilities`),p=document.querySelector(`.modal-content-gallery`);if(t&&(t.src=e.modal.heroImage,t.alt=e.title),n&&n.setAttribute(`srcset`,e.modal.mobileHeroImage||e.modal.heroImage),a&&(a.setAttribute(`datetime`,e.dateAttr),a.textContent=e.date),o&&(o.textContent=e.title),s&&(s.textContent=e.subtitle),c&&(c.textContent=e.modal.intro),r&&(e.modal.introImage?(r.src=e.modal.introImage,r.style.display=`block`):r.style.display=`none`),i&&e.modal.technologies&&(i.innerHTML=e.modal.technologies.map(e=>`<li>${e}</li>`).join(``)),l&&e.modal.links){let t=``;e.modal.links.github&&(t+=`<a href="${e.modal.links.github}" target="_blank" class="btn btn-primary-600 fs-md-label-sm">專案連結</a>`),e.modal.links.demo&&(t+=`<a href="${e.modal.links.demo}" target="_blank" class="btn btn-primary-600 fs-md-label-sm">專案 Demo</a>`),l.innerHTML=t}if(u&&(e.modal.links&&e.modal.links.responsiblePages?u.innerHTML=e.modal.links.responsiblePages.map(e=>`<a href="${e.url}" target="_blank" class="btn btn-neutral fs-md-label-sm">${e.name}</a>`).join(``):u.innerHTML=``),d){let t=e.modal.links?.videos;t&&t.length>0?d.innerHTML=t.map(e=>{let t=e.url.replace(`/blob/`,`/raw/`);return`
            <div class="video-item mb-4">
              <h5 class="fw-bold fs-para-md mb-2 text-secondary"> ${e.title}</h5>
              
              <div class="gif-wrapper mb-2">
                <img 
                  src="${t}" 
                  alt="${e.title}" 
                  class="img-fluid rounded border shadow-sm w-100" 
                  style="max-height: 450px; object-fit: contain; background-color: #f8f9fa;"
                />
              </div>
            </div>
          `}).join(``):d.innerHTML=``}if(f&&e.modal.responsibilities&&(f.innerHTML=e.modal.responsibilities.map(e=>`<li class="mb-4">${e}</li>`).join(``)),p){let t=e.modal.contentImages;t&&t.length>0?p.innerHTML=t.map(e=>{let t=typeof e==`object`,n=t?e.title:`頁面版面展示`;return`
            <div class="gallery-item">
              <h4 class="text-primary-900 mb-3 fs-heading-xxs text-align-center">${n}</h4>
              
              <img 
                src="${t?e.url:e}" 
                alt="${n}" 
                class="img-fluid w-100 mb-4" 
                loading="lazy"
              />
            </div>
          `}).join(``):p.innerHTML=``}}function s(e=r){let t=document.querySelector(`.project-list`),n=document.querySelector(`.projectModal-page`);t.innerHTML=e.map((e,t)=>i(e,t)).join(``),n&&a(n),t.querySelectorAll(`.project-content`).forEach(t=>{t.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let r=t.currentTarget.dataset.id,i=e.find(e=>e.title===r);i&&n&&(o(i),n.classList.add(`is-active`),n.scrollTop=0,document.body.style.overflow=`hidden`)})})}var c=[{type:`lead`,text:`從像素到程式碼，探討 AI 如何成為數位職人的最強外掛，在美學與邏輯的交界處創造全新價值。`},{type:`section`,heading:`視覺想像力的無限延伸：從 Moodboard 到驚艷視覺`,text:`以往在發想專案視覺風格時，往往受限於素材搜尋的耗時或手繪草圖的限制。現在，透過 Midjourney 或 DALL-E 等工具，我能在幾分鐘內產出數十種具備極致美感的配色方案與佈局可能性。這並非取代設計師的審美，而是將我們從繁瑣的執行工作中解放，轉而擔任「視覺策展人」的角色，從龐大的 AI 提案中精煉出最契合品牌魂魄的視覺語言。`},{type:`image`,imgUrl:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_content_1.png?raw=true`,caption:`利用 AI 快速生成的品牌視覺概念圖，能有效縮短與客戶在初期的溝通成本。`},{type:`quote`,title:`我認為`,quoteText:`AI 不會取代設計師，但那些懂得與 AI 協作的人，將會定義下一個世代的設計標準`},{type:`section`,heading:`工作流的重塑：當設計稿與程式碼無縫銜接`,text:`身為前端工程師，最挑戰的環節往往是將精美的設計稿「精準轉譯」為流暢的程式碼。AI 的介入讓這個轉譯過程變得前所未有的流暢。無論是自動產生複雜的 CSS 佈局、建構 React 元件邏輯，還是優化響應式斷點，AI 就像是一位全天候待命的技術助理，讓我們能將精力集中在更高維度的互動體驗設計與產品效能優化。`},{type:`image`,imgUrl:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_content_2.png?raw=true`,caption:`AI 輔助生成的 Clean Code 結構，顯著提升開發整潔度。`},{type:`section`,heading:`跨領域利器：精選 AI 工具的實戰應用對比`,text:`在數位職人的工具箱中，選擇正確的武器至關重要。為了讓大家在開發與設計的混合戰場中更具效率，我整理了一份實戰應用對比表。這份表格不僅是基於工具的功能，幕後更是從我這十年的實務經驗出發，評估各項工具在實際專案中的落地價值與學習門檻，協助你快速找到最適合自己的 AI 隊友。`},{type:`table`,heading:`2026 數位職人必備 AI 工具效能對比表`,headers:[`工具名稱`,`應用範疇`,`核心優勢`,`學習曲線`],rows:[{name:`Midjourney`,scope:`視覺構思`,advantage:`創意發想極致，適合風格探索與氛圍圖生成`,curve:`中高`},{name:`Figma AI`,scope:`UI 設計`,advantage:`直接整合於設計稿，快速生成組件與圖表`,curve:`低`},{name:`GitHub Copilot`,scope:`程式開發`,advantage:`邏輯代碼預測準確，減少重複性標籤撰寫`,curve:`中`},{name:`Claude`,scope:`程式邏輯`,advantage:`具備強大文脈理解力，能優化用戶流程`,curve:`中`}]},{type:`paragraph`,text:`AI 的崛起並非數位職涯的終點，而是另一個高峰的起點。對於喜歡把美學與程式結合的我們來說，這是一個最好的時代。AI 給了我們更強大的雙翼，讓我們能飛得更高、看見更遠的設計地平線。保持好奇心，持續優化你的 Prompt，讓技術為藝術服務，創造出更多令人驚艷的作品。`}],l=[{imgSrc:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_1.png?raw=true`,tags:[`UIUX 設計`,`網頁設計`,`前端技術`],title:`網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率`,link:`#`,content:c},{imgSrc:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true`,tags:[`UIUX 設計`,`設計規範`,`前端技術`],title:`10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統`,link:`#`,content:c},{imgSrc:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true`,tags:[`品牌設計`,`平面設計`,`UIUX 設計`],title:`從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯`,link:`#`,content:c},{imgSrc:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_4.png?raw=true`,tags:[`UIUX 設計`,`前端技術`,`AI 趨勢應用`],title:`當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力`,link:`#`,content:c},{imgSrc:`https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true`,tags:[`前端技術`,`後端架構`,`後端架構`],title:`揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性`,link:`#`,content:c}];function u(e=l){let t=document.querySelector(`.blog-list-vertical`);t&&(t.innerHTML=e.map((e,t)=>`
        <li class="blog-card-vertical" 
            data-aos="fade-down" 
           
        >
          <a class="blog-content" href="blog.html?id=${e.originalId===void 0?t:e.originalId}">
            <div class="blog-img"><img src="${e.imgSrc}" alt="${e.title}" /></div>
            
            <ul class="d-flex breadcrumb fs-para-md fs-md-para-sm">
              ${e.tags.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
            
            <h5 class="fs-heading-sm fs-md-heading-xs">${e.title}</h5>
            
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
      `).join(``))}function d(e=l){let t=document.querySelector(`.blog-list-horizontal`);if(t){if(e.length===0){t.innerHTML=`<li class="fs-para-md text-center py-5">目前沒有相關分類的文章。</li>`;return}t.innerHTML=e.map((e,t)=>`     <li class="blog-card-horizontal" 
                    data-aos="fade-down" 
                
                >
                  <a
                    class="d-flex flex-md-column"
                    href="blog.html?id=${e.originalId===void 0?t:e.originalId}"
                  >
                    <div class="card-hero">
                      <img
                        src="${e.imgSrc}"
                        alt="blogImg"
                      />
                    </div>
                    <div class="blog-content">
                      <ul class="breadcrumb d-flex fs-para-md fs-md-para-xs">
                        ${e.tags.map(e=>`<li>${e}</li>`).join(``)}
                      </ul>
                      <h2 class="fs-heading-sm fs-md-heading-xs">
                        ${e.title}
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
                </li>`).join(``)}}var f=[{name:`GRAPHIC`,zhTitle:`平面設計`,iconName:`format_color_fill`,serviceContent:[{number:`1`,title:`需求訪談與視覺定位`,content:`深度溝通品牌核心價值，確認目標受眾與視覺風格，制定符合商業邏輯的設計藍圖。`},{number:`2`,title:`概念發展與方案提案`,content:`將抽象概念具象化，提供多層次的設計提案，確保視覺語言精準傳遞品牌獨特魅力。`},{number:`3`,title:`匠心編排與細節校正`,content:`針對初稿進行多輪細緻微調，優化排版層次與色彩表現，追求美學與易讀性的完美平衡。`},{number:`4`,title:`專業檔案交付結案`,content:`提供完整原始碼與多樣格式輸出，並附上使用規範建議，確保品牌形象在各處始終如一。`}]},{name:`WEBSITE`,zhTitle:`網頁設計`,iconName:`screenshot_monitor`,serviceContent:[{number:`1`,title:`網站架構與原型規劃`,content:`梳理網站功能需求與使用者故事，規劃資訊架構並繪製 Wireframe，確保流暢的網頁動線與體驗。`},{number:`2`,title:`視覺 UI 設計與提案`,content:`依據品牌定位進行網頁視覺風格設計（Mockup），針對色彩、字體與元件組件提供高擬真的畫面提案。`},{number:`3`,title:`多端響應與動效優化`,content:`細緻校正電腦、平板、手機等不同尺寸的斷點排版，並規劃符合直覺的微互動與動態效果。`},{number:`4`,title:`設計規範與組件交付`,content:`整理完整的 UI Design System 規範與標註檔案（如 Figma 連結），以便與開發團隊進行完美對接。`}]},{name:`FRONTEND`,zhTitle:`前端切版`,iconName:`web`,serviceContent:[{number:`1`,title:`設計稿解析與語意規劃`,content:`深度評估 UI 設計稿，規劃符合 W3C 規範的 HTML5 語意化結構，並規劃現代化的 CSS/SCSS 架構。`},{number:`2`,title:`響應式切版與靜態建置`,content:`運用 Flexbox 與 Grid 進行高還原度的 RWD 網頁切版，確保各家瀏覽器（Chrome, Safari 等）皆能完美呈現。`},{number:`3`,title:`互動效果與 JS 控制`,content:`透過 Vanilla JS 撰寫原生互動邏輯（如手風琴、分頁切換），並結合監聽優化，確保網頁無卡頓。`},{number:`4`,title:`效能最佳化與整合打包`,content:`壓縮圖片與程式碼，提升網頁加載速度，並透過打包工具（如 Vite）處理封裝，提供乾淨、好維護的原始碼。`}]},{name:`BACKEND`,zhTitle:`後端開發`,iconName:`data_table`,serviceContent:[{number:`1`,title:`系統架構與資料庫設計`,content:`分析業務需求，進行關聯式或非關聯式資料庫的綱要（Schema）設計，規劃高效能且安全的系統架構。`},{number:`2`,title:`API 開發與商業邏輯處理`,content:`遵循 RESTful 規範設計並開發後端 API 核心邏輯，確保資料傳輸格式（JSON）結構清晰且嚴謹。`},{number:`3`,title:`權限驗證與安全防護`,content:`實作使用者註冊登入與 Token 驗證機制，並針對常見漏洞（如 SQL 注入、XSS）進行主動防禦防範。`},{number:`4`,title:`API 文件撰寫與部署`,content:`編寫完整清晰的 Swagger API 技術文件供前端對接，並完成雲端伺服器環境部署與資料庫上線測試。`}]}];function p(e){return e.map((e,t)=>`
        <li>
          <button type="button" class="menu-btn ${t===0?`active`:``}" data-index="${t}">
            <span class="material-symbols-outlined mb-3 mb-md-1">${e.iconName}</span>
            <p class="fs-heading-xxxs fs-md-heading-xxxxs">${e.name}</p>
            <h4 class="fs-heading-md fs-md-heading-sm">${e.zhTitle}</h4>
          </button>
        </li>`).join(``)}function m(e,t){let n=e.querySelectorAll(`.menu-btn`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let r=t[e.dataset.index].serviceContent;g(r)})})}function h(){let e=document.querySelector(`.service-menu-list`);e&&(e.innerHTML=p(f),g(f[0].serviceContent),m(e,f))}function g(e){let t=document.querySelector(`.service-steps-content`);t&&(t.innerHTML=e.map(e=>`
      <li class="d-flex gap-5">
        <div class="circle">
          <p class="circle-number">${e.number}</p>
          <span class="circle-line"></span>
        </div>
        <div class="text-neutral-0">
          <h2 class="fs-heading-md fs-md-heading-sm mb-3">${e.title}</h2>
          <p class="fs-para-md fs-md-para-sm">${e.content}</p>
        </div>
      </li>`).join(``))}var _=document.querySelector(`.service-case-list`);function v(e=r){_.innerHTML=e.map(e=>` <li class="service-case">
              <a
                class="service-case-card"
                href=""
              >
                <div class="card-img">
                  <img
                    src=${e.bgImg}
                  />
                </div>
                <div class="d-flex flex-md-column">
                  <ul class="breadcrumb fs-para-md fs-md-para-sm d-flex  mr-auto">
                  ${e.tag.map(e=>`<li>${e}</li>`).join(``)}
                  </ul>
                  <time
                    class="fs-para-sm fs-md-para-xs order-md-first mb-md-1"
                    datetime="2022-10-16"
                    >Oct 16, 2022</time
                  >
                </div>
                <h4 class="fs-heading-sm fs-md-heading-xs">${e.title}</h4>
                <div class="d-flex justify-content-between align-items-center gap-20">
                  <p class="fs-para-md fs-md-para-sm">${e.subtitle}</p>
                  <div class="arrow-btn arrow-btn-primary align-self-center">
                    <span class="material-symbols-outlined">arrow_outward</span>
                  </div>
                </div>
              </a>
            </li>`).join(``)}var y=[{number:`01`,title:`設計提案後包含幾次修改機會？`,content:`沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。`},{number:`02`,title:`結案時我會收到哪些格式的檔案？`,content:`沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。`},{number:`03`,title:`平面設計的成果，未來能直接應用在網頁嗎？`,content:`沒問題。由於我兼具 UI/UX 設計與前端工程背景，在執行平面設計時會預先考量數位載體的適配性。這意味著您的品牌識別能無縫轉譯至網頁介面，不僅節省後續開發的重複溝通，更能確保品牌在不同平台上的視覺品質。`},{number:`04`,title:`完成一套完整的設計流程需要多久`,content:`視專案複雜度而定，一般約需 10 到 14 個工作日。透過嚴格執行的「四步驟流程」，我們能確保每個階段都有明確的進度產出，有效避免時程延宕。若有特定的上線期限，歡迎在訪談階段提出，我會為您評估最合適的排程。`}];document.querySelector(`.qa-list`);function b(e){return`
    <li class="qa-card" data-id="${e.number}">
      <div class="qa-title fs-heading-xxs fs-md-heading-xxxs">
        <h4>${e.number}</h4>
        <h4 class="mr-auto">${e.title}</h4>
        <span class="material-symbols-outlined"> keyboard_arrow_down </span>
      </div>
      <div class="qa-content">
        <p class="fs-para-md fs-md-para-sm">
          ${e.content}
        </p>
      </div>
    </li>
  `}function x(e){e.querySelectorAll(`.qa-card`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.toggle(`active`)})})}function S(){let e=document.querySelector(`.qa-list`);e.innerHTML=y.map(b).join(``),x(e)}var C=[`全部`,`React前端開發`,`網頁切版`,`UI 設計與規劃`];function w(e){return e.map((e,t)=>`<li class="project ${t===0?`active`:``}" data-id="${e}">${e}</li>`).join(``)}function T(e,t){return e===`全部`?t:t.filter(t=>t.tag.includes(e))}function E(e){let t=e.querySelectorAll(`.project`);t.forEach(e=>{e.addEventListener(`click`,n=>{t.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let i=n.target.dataset.id;s(T(i,r))})})}function D(){let e=document.querySelector(`.projects-list`);e.innerHTML=w(C),E(e)}var O=()=>{let e=document.querySelectorAll(`.timeline-section`),t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(e.forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`)):t.target.classList.remove(`active`)})},{rootMargin:`-80% 0px -80% 0px`,threshold:0});e.forEach(e=>t.observe(e))},k=[`全部`,`品牌設計`,`平面設計`,`UIUX 設計`,`網頁設計`,`設計規範`,`前端技術`,`後端架構`,`AI 趨勢應用`];function A(){let e=document.querySelector(`.blog-menu`);e&&(e.innerHTML=k.map(e=>`<li><button class="${e===`全部`?`active`:``}" data-tag="${e}">${e}</button></li>`).join(``),e.addEventListener(`click`,t=>{let n=t.target.closest(`button`);if(!n)return;e.querySelectorAll(`button`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.dataset.tag;d(r===`全部`?l:l.map((e,t)=>({...e,originalId:t})).filter(e=>e.tags.includes(r)))}))}function j(){let e=document.querySelector(`.blog-detail`),t=document.querySelector(`.blog-container .breadcrumb`),n=document.querySelector(`.blog-breadcrumb .current-title`);if(!e)return;let r=new URLSearchParams(window.location.search),i=l[parseInt(r.get(`id`))||0];if(!i)return;t&&(t.innerHTML=i.tags.map(e=>`<li>${e}</li>`).join(``)),n&&(n.textContent=i.title);let a=i.content.find(e=>e.type===`lead`),o=`
    <div class="blog-main-title">
      <h1 class="fs-heading-xxl fs-md-heading-md">
        ${i.title}
      </h1>
      <h3 class="fs-heading-sm fs-md-heading-xxs">
        ${a?a.text:``}
      </h3>
      <p>
        在跨入 UI/UX 與前端領域的第十年，我見證了無數技術更迭，但 AI 的出現無疑是最具衝擊性的一場革命。本文將深度解析資深設計師如何將生成式 AI 整合進現有工作流，透過 AI 釋放視覺想像力，並利用智慧化工具優化前端開發效率，實踐美學與技術的完美共生。
      </p>
    </div>
  `,s=i.content.map(e=>{switch(e.type){case`section`:return`
          <div class="blog-section">
            <h2 class="mt-4 mt-md-2 fs-heading-sm">${e.heading}</h2>
            <p class="fs-para-md">${e.text}</p>
          </div>
        `;case`image`:return`
          <div>
            <img src="${e.imgUrl}" alt="${e.caption}" class="mt-4 mt-md-2" />
            <p>${e.caption}</p>
          </div>
        `;case`quote`:return`
          <div class="blog-quote">
            <p class="quote-title">${e.title}</p>
            <h3 class="fs-heading-xs fs-heading-xxxs">${e.quoteText}</h3>
          </div>
        `;case`table`:return`
          <div class="blog-table-container">
            <h3 class="mt-4 mt-md-2 fs-heading-sm fs-md-heading-xxs">${e.heading}</h3>
            <table class="blog-custom-table">
              <thead>
                <tr>${e.headers.map(e=>`<th>${e}</th>`).join(``)}</tr>
              </thead>
              <tbody>
                ${e.rows.map(e=>`
                  <tr>
                    <td><strong>${e.name}</strong></td>
                    <td>${e.scope}</td>
                    <td>${e.advantage}</td>
                    <td>${e.curve}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        `;case`paragraph`:return`
          <div class="blog-conclusion">
            <p>${e.text}</p>
          </div>
        `;default:return``}}).join(``),c=e.querySelector(`.blog-footer`),u=c?c.outerHTML:``;e.innerHTML=o+s+u}e(),document.querySelector(`.service-list`)&&n(),document.querySelector(`.project-list`)&&s(r.slice(0,3)),document.querySelector(`.blog-list-vertical`)&&u(l.map((e,t)=>({...e,originalId:t})).filter((e,t)=>[1,2,4].includes(t))),document.querySelector(`.service-page`)&&(h(),v(r.filter((e,t)=>[0,1].includes(t))),S()),document.querySelector(`.projects-page`)&&(D(),s(r)),document.querySelector(`.timeline-container`)&&O(),document.querySelector(`.blog-page`)&&!document.querySelector(`.blog-detail`)&&(A(),d()),document.querySelector(`.blog-detail`)&&j(),setTimeout(()=>{AOS.init({offset:80,duration:800,easing:`ease-in-out`,once:!0}),AOS.refresh()},50);