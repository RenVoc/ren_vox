
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

    $('#profile-form').validate({
        highlight: function(element) {
            $(element).parent().addClass("form__label_error");
        },
        unhighlight: function(element) {
            $(element).parent().removeClass("form__label_error");
        }
    });


    var orig = [];

    $.fn.getType = function () {
        return this[0].tagName == "INPUT" ? $(this[0]).attr("type").toLowerCase() : this[0].tagName.toLowerCase();
    }

    $("form :input").each(function () {
        var type = $(this).getType();
        var tmp = {
            'type': type,
            'value': $(this).val()
        };
        if (type == 'radio') {
            tmp.checked = $(this).is(':checked');
        }
        orig[$(this).attr('id')] = tmp;
    });

    var button = $('#submit-settings');
    $('#workspace-settings').bind('change keyup', function () {
        var disable = true;
        $("form :input").each(function () {
            var type = $(this).getType();
            var id = $(this).attr('id');
            if (type == 'text' || type == 'select') {
                disable = (orig[id].value == $(this).val());
            } else if (type == 'radio') {
                disable = (orig[id].checked == $(this).is(':checked'));
            }
            if (!disable) {
                return false; // break out of loop
            }
        });
        button.prop('disabled', disable);
    });

});