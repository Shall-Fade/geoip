// Создаём объект XMLHttpRequest
let xhr = new XMLHttpRequest();

xhr.open('GET', './result.php', false);

// Отсылаем запрос
xhr.send();

// Обработка ошибки
if (xhr.status !== 200) {
    alert( xhr.status + ': ' + xhr.statusText );
}