export default class Header {
    constructor() {
        this.page = window.location.pathname;

        // Check if on the main page; exit if not
        if (this.page !== "/" && this.page !== "/index.html") return;

        this.header = document.querySelector("header");
        this.logo = document.querySelector(".header__logo");
        this.initEvents();
    }

    initEvents() {
        console.log("This page is: " + this.page);
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            if (window.scrollY > 50) {
                this.header.classList.add("header--scrolled");
                this.logo.classList.add("header__logo--cleared")
            }
        })
    }
}