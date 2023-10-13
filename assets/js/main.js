// project scripts

function myFunc() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
        console.log(nav.className);
    } else {
        nav.className = "nav";
        console.log(nav.className);
    }
}
