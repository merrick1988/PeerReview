function checkOnly(stayChecked) {
    checkboxes = document.getElementsByClassName(stayChecked.className);
    for (var i in checkboxes)
        checkboxes[i].checked = false;
    stayChecked.checked = true;
}

function teamClick(team) {
    checkboxes = document.getElementsByClassName(team.id);
    for (var i in checkboxes) {
        if (team.checked == true) {
            checkboxes[i].disabled = false;
        }
        else {
            checkboxes[i].disabled = true;
        }
    }
}