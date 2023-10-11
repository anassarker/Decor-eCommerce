const menu = document.querySelector("#menu");
const menubar = document.querySelector("#menu-bar");
const cartbtn = document.querySelector("#cart-button");
const cartImage = document.querySelectorAll('.cart-image');
const cartButton = document.querySelectorAll('#cart-button');
const topDown = document.querySelector('.top-down');
const topDownIcon = document.querySelector('.top-down-icon');

let timeoutID;

function showDropdown(){

    if(topDown.classList.contains("invisible")){
            topDown.classList.remove("invisible");
            topDown.classList.add("visible");
        }
}

function hideDropdown(){
    if(topDown.classList.contains("visible")){
        timeoutID = setTimeout(() => {
            topDown.classList.remove("visible");
            topDown.classList.add("invisible");
            }, 500);
        }      
}

topDownIcon.addEventListener('mouseenter', () => {
    clearTimeout(timeoutID);
    showDropdown();
});

topDownIcon.addEventListener('mouseleave', () => {
    hideDropdown();
});

topDownIcon.addEventListener('click', () =>{
    if(topDown.classList.contains('invisible')){
        showDropdown();
    }
    else{
        hideDropdown();
    }
});

topDown.addEventListener('mouseenter', () => {
    clearTimeout(timeoutID);
});

topDown.addEventListener('mouseleave', () => {
    hideDropdown();
});

cartImage.forEach((el,i) => {
    cartImage[i].addEventListener("click", () => {
        cartButton[i].style.transform = 'translateY(-25px)';
    });
    
    cartImage[i].addEventListener("click", () => {
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


