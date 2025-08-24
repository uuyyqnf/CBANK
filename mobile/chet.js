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