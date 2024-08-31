export default class Modal {

  constructor() {
    this.modalSections = document.querySelectorAll('.homepage__services__textbox__list-item');
    this.events();
  }

  events() {
    this.modalSections.forEach((modal) => {
      modal.addEventListener('click', () => modal.classList.toggle('homepage__services__textbox__list-item--revealed'));
    });
  }

}