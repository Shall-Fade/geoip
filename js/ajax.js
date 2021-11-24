let xhr = new XMLHttpRequest();

xhr.open('GET', '');

xhr.send();

xhr.onload = function() {
    if(xhr.status != 200) {
        alert(`Ошибка ${xhr.status}:${xhr.statusText}`);
    } else {
        alert(`Успешно!`);
    }
};

xhr.onerror = function() {
    alert(`Запрос не удался!`);
};