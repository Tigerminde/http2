export default class ConfirmDel {
  init() {
    const formConfirmDel = document.createElement('div');
    formConfirmDel.id = 'confirm-del';
    formConfirmDel.className = 'popup hidden';
    formConfirmDel.innerHTML = `
    <p>Удалить тикет?</p>
    <p>Вы уверены, что хотите удалить тикет? Это действие необратимо.</p>
    <div class="buttons">
      <div id="ok-del" class="button">ОК</div>
      <div id="cancel-del" class="button">Отмена</div>
    </div>
    `;
    document.body.appendChild(formConfirmDel);
    this.formDel = document.getElementById('confirm-del');
    this.okDel = document.getElementById('ok-del');
    this.cancelDel = document.getElementById('cancel-del');
  }

  delElement(callback) {
    this.formDel.classList.remove('hidden');
    this.formDel.style.top = `${(window.innerHeight
      - this.formDel.offsetHeight) / 2}px`;
    this.formDel.style.left = `${(window.innerWidth
      - this.formDel.offsetWidth) / 2}px`;
    this.okDel.addEventListener('click', () => {
      this.formDel.classList.add('hidden');
      callback();
    });

    this.cancelDel.addEventListener('click', () => {
      this.formDel.classList.add('hidden');
    });
  }
}
