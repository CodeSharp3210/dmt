/* Website by Parliamo: https://parliamo.me */

window.onload = () => {
    window.scrollTo(0,0);
    console.info(atob("YnkgUGFybGlhbW8gQCBodHRwczovL3BhcmxpYW1vLm1l"));

    document.getElementById("menu_button").addEventListener("click", () => {
        document.getElementsByClassName("nav-overlay")[0].setAttribute("open", "true");
        document.body.setAttribute("open", "true");
    });

    document.getElementById("close_button").addEventListener("click", closeOverlay);

    document.querySelectorAll(".overlay-link").forEach((l) => {
        l.addEventListener("click", closeOverlay)
    });
}

function closeOverlay() {
    document.getElementsByClassName("nav-overlay")[0].removeAttribute("open");
    setTimeout(() => document.body.removeAttribute("open"), 1000);
}