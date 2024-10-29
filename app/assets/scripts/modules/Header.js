export default class Header {
    constructor() {
        this.header = document.querySelector("header");
        this.logo = document.querySelector(".header__logo");
        this.initEvents();
    }

    initEvents() {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            if (window.scrollY > 50) {
                this.header.classList.add("header--scrolled");
                this.logo.classList.add("header__logo--cleared")
            }
        })
    }


}