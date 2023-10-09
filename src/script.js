const menu = document.querySelector("#menu");
const menubar = document.querySelector("#menu-bar");
const cartbtn = document.querySelector("#cart-button");

const cartImage = document.querySelectorAll('.cart-image');
const cartButton = document.querySelectorAll('#cart-button');


cartImage.forEach((el,i) => {
    cartImage[i].addEventListener('mouseenter', () => {
        cartButton[i].style.transform = 'translateY(-25px)';
    });
    
    cartImage[i].addEventListener('mouseleave', () => {
        cartButton[i].style.transform = 'translateY(0)';
    });
});





menu.addEventListener("click", () => {
    if (menubar.classList.contains("invisible")) {
        menubar.classList.remove("invisible");
        menubar.classList.add("visible", "slide-transition");
        menubar.style.transform = 'translateX(0%)';
    }
});

menubar.addEventListener("click", () => {
    if (menubar.classList.contains("visible")) {
        menubar.classList.remove("visible");
        menubar.classList.add("invisible");
        menubar.style.transform = 'translateX(-100%)';
    }
});

window.addEventListener("click", (event) => {
    if (event.target !== menu && event.target !== menubar) {
        menubar.classList.remove("visible");
        menubar.classList.add("invisible");
        menubar.classList.remove("slide-transition");
        menubar.style.transform = 'translateX(-100%)';
    }
});

