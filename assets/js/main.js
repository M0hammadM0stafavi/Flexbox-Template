// project scripts

function myFunc() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
}
