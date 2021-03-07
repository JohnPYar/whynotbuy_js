$(document).ready(function () {
    // по умолчанию скрываем способ оплаты для регионов за наличные
    $('label input [value=cash]').hide();

    // список городов для добавления способа оплаты Наличные
    const cities = [
        'г Москва',
        'г Щелково'
    ]

    //    получаем знаечение выбранного по умолчанию города
    let address = $('.t-input-description').text().split(', ');

    console.log(address)

    let city = address[address.length -1];

    console.log(city)

//  проверяем значение города по умолчанию
    $.each(cities, function (index, value) {
        if (value == city) {

        }
    })
})