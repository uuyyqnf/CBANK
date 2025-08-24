
  (function () {
    const mobileBreakpoint = 768; // ширина экрана, меньше которой — мобильная версия
    const mobileUrl = "./mobile/debug.html";
    const desktopUrl = "./debug.html";

    function getCurrentBaseUrl() {
      return window.location.origin;
    }

    function shouldGoMobile() {
      return window.innerWidth < mobileBreakpoint;
    }

    function redirectIfNeeded() {
      const isMobile = shouldGoMobile();
      const currentUrl = getCurrentBaseUrl();

      // Если нужно на мобильную
      if (isMobile && !currentUrl.includes("m.example.com")) {
        window.location.href = mobileUrl;
      }

      // Если нужно на десктоп
      if (!isMobile && currentUrl.includes("m.example.com")) {
        window.location.href = desktopUrl;
      }
    }

    // 1. Проверяем как можно раньше — до загрузки всего
    redirectIfNeeded();

    // 2. Проверяем при изменении размера (например, если развернули окно на десктопе)
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(redirectIfNeeded, 300);
    });
  })();

