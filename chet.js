
  (function () {
    const mobileBreakpoint = 768; // ширина экрана, меньше которой — мобильная версия
    const mobileUrl = "./mobile/chet.html";
    const desktopUrl = "./chet.html";

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




function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIdInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let balance_cash = getRandomInRange(100, 1000000);


let card_id = getRandomIdInRange(10000000, 99999999);

    function formatMoney(amount) {
      return amount
        .toFixed(2) // всегда 2 знака после запятой
        .replace('.', ',') // десятичный разделитель = запятая
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // разделитель тысяч = точка
    }

    function formatId(amount) {
      return amount
        .toFixed(0) // всегда 2 знака после запятой
        .replace('.', ',') // десятичный разделитель = запятая
        .replace(/\B(?=(\d{4})+(?!\d))/g, ' '); // разделитель тысяч = точка
    }

    document.getElementById("balance").textContent = formatMoney(balance_cash) + " ₽";
    document.getElementById("card_id").textContent = '# 1001 ' + formatId(card_id);