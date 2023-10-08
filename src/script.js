const menu = document.querySelector("#menu");
const menubar = document.querySelector("#menu-bar");

menu.addEventListener("click", () => {
    if (menubar.classList.contains("invisible")) {
        menubar.classList.remove("invisible");
        menubar.classList.add("visible");
    }
});

menubar.addEventListener("click", () => {
    if (menubar.classList.contains("visible")) {
        menubar.classList.remove("visible");
        menubar.classList.add("invisible");
    }
});

window.addEventListener("click", (event) => {
    if (event.target !== menu && event.target !== menubar) {
        menubar.classList.remove("visible");
        menubar.classList.add("invisible");
    }
});
