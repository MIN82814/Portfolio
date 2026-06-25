import "./style/style.scss";

import { initHeaderMenu } from "./js/components/header";

import { serviceCard } from "./js/components/serviceCard";
import { renderProjects, projectContent } from "./js/components/projectsCard";
import { renderBlogsVertical, blogContent } from "./js/components/blogsCard";

initHeaderMenu();

if (document.querySelector(".service-list")) {
  serviceCard();
}

if (document.querySelector(".project-list")) {
  const homeProjects = projectContent.slice(0, 3);
  renderProjects(homeProjects);
}

if (document.querySelector(".blog-list-vertical")) {
  const homeBlogs = blogContent
    .map((blog, index) => ({ ...blog, originalId: index }))
    .filter((_, index) => [1, 2, 4].includes(index));

  renderBlogsVertical(homeBlogs);
}

import { renderServiceMenu, renderServiceSteps, renderServiceCase, renderServiceQA } from "./js/page/servicePage";

if (document.querySelector(".service-page")) {
  renderServiceMenu();

  const serviceCase = projectContent.filter((_, index) => [0, 1].includes(index));
  renderServiceCase(serviceCase);

  renderServiceQA();
}

import { renderProjectsList } from "./js/page/projectPage";

if (document.querySelector(".projects-page")) {
  renderProjectsList();
  renderProjects(projectContent);
}

import { renderBlogMenu } from "./js/page/blogsPage";
import { renderBlogHorizontal } from "./js/components/blogsCard";

if (document.querySelector(".blog-page") && !document.querySelector(".blog-detail")) {
  renderBlogMenu();
  renderBlogHorizontal();
}

import { initBlogDetailPage } from "./js/page/blogPage";

if (document.querySelector(".blog-detail")) {
  initBlogDetailPage();
}

setTimeout(() => {
  AOS.init({
    offset: 80,
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
  AOS.refresh(); // 強制刷一次，確保非同步渲染的卡片都有被 AOS 的偵測雷達掃描到
}, 50);
