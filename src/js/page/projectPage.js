import { renderProjects, projectContent } from "../components/projectsCard";

const projectsMenuContent = ["全部", "React前端開發", "網頁切版", "視覺設計", ];

function createProjectsMenuHTML(menuContent) {
  return menuContent
    .map((project, index) => {
      const activeClass = index === 0 ? "active" : "";
      return `<li class="project ${activeClass}" data-id="${project}">${project}</li>`;
    })
    .join("");
}

function filterProjectsData(filterValue, totalData) {
  if (filterValue === "全部") {
    return totalData;
  }

  return totalData.filter((project) => project.tag.includes(filterValue));
}

function bindProjectsMenuEvents(menuContainer) {
  const menuItems = menuContainer.querySelectorAll(".project");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      menuItems.forEach((m) => m.classList.remove("active"));
      item.classList.add("active");

      const filterValue = e.target.dataset.id;

      const filteredResult = filterProjectsData(filterValue, projectContent);

      renderProjects(filteredResult);
    });
  });
}

export function renderProjectsList() {
  const projectsList = document.querySelector(".projects-list");

  projectsList.innerHTML = createProjectsMenuHTML(projectsMenuContent);

  bindProjectsMenuEvents(projectsList);
}
