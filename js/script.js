jQuery(function (){

    // Определение элементов
    let elements = [
        {index: 1},
        {index: 2},
        {index: 3},
        {index: 4},
    ];

    // Определение дополнительных параметров элементов
    elements.forEach((item) => {
        item["id"] = "#" + "content_" + item.index;
        item["position"] = jQuery(item.id).offset().top;
        item["show"] = false;
        item["script"] = "canvas_" + item.index;
    });

    // Работа с холстом
    canvas.init();

    // Событие скрола
    jQuery(document).scroll(function (element) {

        let document_position = jQuery(document).scrollTop();

        elements.forEach((item) => {
            if(document_position >= item.position && !item.show){
                item.show = true;
                window[item.script].show();
            }
            if(document_position <= item.position && item.show){
                item.show = false;
                window[item.script].show();
            }
        });
    });


})
