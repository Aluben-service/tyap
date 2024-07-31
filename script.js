addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search();
    }
});
function displaySE() {
    var currentSE = document.getElementById("SE");
    var se = currentSE[currentSE.selectedIndex].id;
    alert("You are now searching on " + se);
    var SE = currentSE[currentSE.selectedIndex].value;
    return SE;
}

function fakeset(box, boxid) {
    boxid = box[box.selectedIndex].id;
    alert("you are now searching on " + boxid);
}

function settings(div) {
    if (div.style.display === "none") {
        div.style.display = "block";
    } else if (div.style.display === "block") {
        div.style.display = "none";
    }
}

function search() {
    var searchbox = document.getElementById("input");
    var url = searchbox.value;
    if (url.includes("://")) {
        window.location = url;
        searchbox.value = "";
    } else if (url.includes(".")) {
        window.location = "https://" + url;
        searchbox.value = "";
    } else {
        var engineval = document.getElementById("SE");
        var engine = engineval[engineval.selectedIndex].value;
        window.location = engine + url;
        searchbox.value = "";
    }
}
