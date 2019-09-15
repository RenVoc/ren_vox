
$(document).ready(function(){var $select1 = $('#tzone');
    $.ajax({
        url: '../tzon.json',
        dataType: 'JSON',
        success: function (data) {
            $.each(data, function (i, val) {
                bar = '<option LABEL="' + val.tzone + '">'+val.tzone+'</option>';
                $select1.append(bar);
            })
        },
        error: function () {
            alert("JSON ERROR");
        }
    });
    var $select2 = $('#language');
    $.ajax({
        url: '../language.json',
        dataType: 'JSON',
        success: function (data) {
            $.each(data, function (i, val) {
                bar = '<option LABEL="' + val.language + '">'+val.language+'</option>';
                $select2.append(bar);
            })
        },
        error: function () {
            alert("JSON ERROR");
        }
    });

    $('#profile-form').validate();

    $('.form__label').each(function(){
        if($(this).find('.form__label__input').hasClass('error') == true) {
            $(this).parent().find('.form__label__title').addClass('error');
        }
    });

});