export default class Print {
    constructor() {
        this.printButton = document.querySelector(".print-button");
        this.events();
    }

    events() {
        this.printButton.addEventListener("click", () => {
            window.print();
        })
    }
}