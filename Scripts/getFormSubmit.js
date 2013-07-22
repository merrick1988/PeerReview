function onSelectedIndexChanged() {
    var form = document.getElementById("getForm");
    form.submit();
}

function setHidden(element) {
    var hidden = $('#SurveyIdHidden');
    hidden.val($(element).find(":selected").val())
}