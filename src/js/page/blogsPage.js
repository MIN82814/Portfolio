import { blogContent } from "../components/blogsCard";
import { renderBlogHorizontal } from "../components/blogsCard";

const menuList = [
  "全部",
  "品牌設計",
  "平面設計",
  "UIUX 設計",
  "網頁設計",
  "設計規範",
  "前端技術",
  "後端架構",
  "AI 趨勢應用",
];

export function renderBlogMenu() {
  const blogMenu = document.querySelector(".blog-menu");
  if (!blogMenu) return;

  const menuListContent = menuList.map((item) => {
    const isActive = item === "全部" ? "active" : "";
    return `<li><button class="${isActive}" data-tag="${item}">${item}</button></li>`;
  });

  blogMenu.innerHTML = menuListContent.join("");

  blogMenu.addEventListener("click", (e) => {
    const targetBtn = e.target.closest("button");
    if (!targetBtn) return;

    blogMenu.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    targetBtn.classList.add("active");

    const selectedTag = targetBtn.dataset.tag;

    if (selectedTag === "全部") {
      renderBlogHorizontal(blogContent);
    } else {
      const filteredBlogs = blogContent
        .map((blog, index) => ({ ...blog, originalId: index }))
        .filter((blog) => blog.tags.includes(selectedTag));

      renderBlogHorizontal(filteredBlogs);
    }
  });
}
