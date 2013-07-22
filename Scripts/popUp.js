var ajaxLoad = function () {
    var checkboxes = $('.b-popup__window').find(':checkbox'),
        opentexts = $('.b-popup__window').find('.b-popup__opentext'),
        popupWindow = $('.b-popup__window'),
        selects = $('.b-popup__window').find('select'),
        i = 0,
        counter = 0;

    var closePopup = function () {
        if (counter != 1) {
            $('#ajax_data').children().first().remove();
        } else {
            counter--;
        }
    }
    var stopClosing = function () {
        if (counter < 1) {
            counter++;
        }
    }
    var showOpenText = function (i) {
        return function () {
            if (this.checked) {
                $(opentexts[i]).css({ 'display': 'block' });
            } else {
                $(opentexts[i]).css({ 'display': 'none' });
            }
        };
    }
    var validate = function () {
        var i = 0,
            ret = true;
        for (i = 0; i < selects.length; i++) {
            if ($(selects[i]).attr('value') == -1) {
                $(selects[i]).css({ 'border-color': 'red' });
                ret = false;
            }
        }
        return ret;
    }
    var setBlackBorder = function () {
        if ($(this).attr('value') != -1) {
            $(this).css({ 'border-color': 'black' });
        }
    }
    $('.b-popup__window').on('click', stopClosing);
    $('.b-popup__window-holder').on('click', closePopup);
    $('#submit_answers').on('click', validate);
    $(selects).on('click', setBlackBorder);
    for (i = 0; i < checkboxes.length; i++) {

        if (!checkboxes[i].checked) {
            $(opentexts[i]).css({ 'display': 'none' });
        } else {
            $(opentexts[i]).css({ 'display': 'block' });
        }
        $(checkboxes[i]).on('click', showOpenText(i));
    }

};