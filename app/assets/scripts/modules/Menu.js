export default class Menu {

    constructor() {
        this.menu = document.querySelector(".menu");
        this.menuOpener = document.querySelector("#menu-opener");
        this.menuCloser = document.querySelector("#menu-closer");
        this.events();
    }

    events() {
        this.menuOpener.addEventListener("click", () => this.openMenu());
        this.menuCloser.addEventListener("click", () => this.closeMenu());
    }

    openMenu() {
        console.log("Menu opened.");
        this.menu.classList.add("menu--opened");
    }

    closeMenu() {
        console.log("Menu closed.");
        this.menu.classList.remove("menu--opened");
    }
}