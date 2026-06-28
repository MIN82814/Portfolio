export const initTimeline = () => {
  const sections = document.querySelectorAll(".timeline-section");

  const observerOptions = {
    // 鎖定視窗垂直中央的 30% 到 70% 區域
    rootMargin: "-80% 0px -80% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 進入：先把所有區塊的 active 關掉，只點亮當前這一個
        sections.forEach((s) => s.classList.remove("active"));
        entry.target.classList.add("active");
      } else {
        // 離開：將該區塊的 active 關掉 (確保第一塊離開時能正常關閉)
        entry.target.classList.remove("active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
};
