

$(document).ready(function () {
    // по умолчанию скрываем способ оплаты для регионов за наличные
    $('label input[value=cash]').parent().hide();

    // список городов для добавления способа оплаты Наличные
    const cities = [
        'г Москва',
        'г Щелково',
        // 'г Ярославль'
    ]

    //    получаем знаечение выбранного по умолчанию города
    let address = $('.t-input-description').text().split(', ');

    console.log(address)

    let city = address[address.length -1];

    console.log(city)

//  проверяем значение города по умолчанию
    $.each(cities, function (index, value) {
        if (value === city) {
            $('label input[value=cash]').parent().show();
        }
    })


    // отслеживаем выбор город в выпадающем списке, по клику проверяем город

    $(".searchbox-list").click( function () {

        console.log('Click');

        let address = $('.t-input-description').text().split(', ');

        // console.log(address)

        // let city = address[address.length -1];
        let city = 'г Москва';

        console.log(city)

//  проверяем значение города
        $.each(cities, function (index, value) {

            console.log(index, value);

            if (value === city) {
                $('label input[value=cash]').parent().show();
                return false;
            } else {
                $('label input[value=cash]').parent().hide();
            }
        })
    })

})

