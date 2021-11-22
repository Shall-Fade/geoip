$.validator.addMethod('IP4Checker', function(value) {

    let ip="^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
    "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";
    return value.match(ip);
});

$('#myForm').validate({
    rules: {
        ip: {
            required: true,
            minlength: 7,
            IP4Checker: true
        }
    },
    messages: {
        ip: {
            required: "*Поле IP-Адрес обязательно для заполнения",
            minlength: "*Длина IP-Адреса должна быть не менее 7 символов",
            IP4Checker: "*Ошибка в написании IP-Адреса"
        }
    }
});