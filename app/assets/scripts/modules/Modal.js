export default class Modal {

  constructor() {
    this.modalSections = document.querySelectorAll('.services__tabs__textbox__list-item');
    this.events();
  }

  events() {
    this.modalSections.forEach((modal) => {
      modal.addEventListener('click', () => modal.classList.toggle('services__tabs__textbox__list-item--revealed'));
    });
  }

}