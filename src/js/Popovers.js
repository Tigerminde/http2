export default class Popovers {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.elPopup = document.createElement('div');
    this.sProduct = '';
  }

  get htmlElement() {
    return `
      <p id="title-popup">Добавить тикет</p>
      <p>Краткое описание</p>
      <input type="text" id="name" class="input" value="">
      <p>Подробное описание</p>
      <input type="text" id="description" class="input" value="">
      <div class="buttons">
        <div id="pSave" class="button">ОК</div>
        <div id="pCancel" class="button">Отмена</div>
      </div>
    `;
  }

  addErrorElement(paarentElement) {
    const error = document.createElement('div');
    error.id = 'form-error';
    error.className = 'form-error hidden';
    error.textContent = 'Error';
    paarentElement.appendChild(error);
  }

  saveProduct(callback) {
    this.sProduct = callback;
  }

  bindToDOM() {
    this.elPopup.id = 'popup';
    this.elPopup.className = 'popup hidden';
    this.elPopup.innerHTML = this.htmlElement;
    this.addErrorElement(this.elPopup);
    this.parentEl.appendChild(this.elPopup);
    this.constants();
    this.eventsPopup();
  }

  showPopup() {
    this.selectPopup.classList.remove('hidden');
    this.selectPopup.style.top = `${(window.innerHeight
      - this.selectPopup.offsetHeight) / 2}px`;
    this.selectPopup.style.left = `${(window.innerWidth
      - this.selectPopup.offsetWidth) / 2}px`;
  }

  constants() {
    this.selectPopup = document.querySelector('#popup');
    this.inputName = document.querySelector('#name');
    this.inputDescription = document.querySelector('#description');

    this.btnSave = document.getElementById('pSave');
    this.btnCancel = document.getElementById('pCancel');
    this.elError = document.querySelector('#form-error');
  }

  eventsPopup() {
    this.btnSave.addEventListener('click', () => {
      if (this.inputName.value === '') {
        this.inputName.focus();
        this.showError(this.inputName, 'Введите текст!');
        return;
      }

      this.selectPopup.classList.add('hidden');
      this.sProduct();
      this.clearInput();
    });

    this.btnCancel.addEventListener('click', () => {
      this.selectPopup.classList.add('hidden');
      this.hidenError();
      this.clearInput();
    });

    this.inputName.addEventListener('input', () => {
      this.hidenError();
    });
  }

  hidenError() {
    if (!this.elError.classList.contains('hidden')) {
      this.elError.classList.add('hidden');
    }
  }

  clearInput() {
    this.inputName.value = '';
    this.inputDescription.value = '';
  }

  showError(element, message) {
    this.elError.textContent = message;
    this.elError.classList.remove('hidden');
    this.elError.style.top = `${element.offsetTop + element.offsetHeight}px`;
    this.elError.style.left = `${element.offsetLeft + ((element.offsetWidth - this.elError.offsetWidth) / 2)}px`;
  }
}
