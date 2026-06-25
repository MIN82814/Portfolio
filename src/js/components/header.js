export function initHeaderMenu() {
  const headerMdMenu = document.querySelector(".header-md-menu");
  const headerMenu = document.querySelector(".header-menu");
  const headerOverlay = document.querySelector(".header-overlay");
  const menuIcon = headerMdMenu?.querySelector(".material-symbols-outlined");

  if (!headerMdMenu || !headerMenu || !headerOverlay || !menuIcon) return;

  function toggleMenu(forceState) {
    let isOpen;
    if (typeof forceState === "boolean") {
      isOpen = forceState;
    } else {
      headerMenu.classList.toggle("active");
      isOpen = headerMenu.classList.contains("active");
    }

    headerMdMenu.classList.toggle("active", isOpen);
    headerOverlay.classList.toggle("active", isOpen);
    headerMdMenu.setAttribute("aria-expanded", String(isOpen));

    menuIcon.textContent = isOpen ? "close" : "menu";
  }

  headerMdMenu.addEventListener("click", () => {
    toggleMenu();
  });

  headerOverlay.addEventListener("click", () => {
    toggleMenu(false);
  });
}
