export default class WorkDisplay {
  constructor() {
    this.tableTickets = document.querySelector('#list-ticket');
  }

  redrawGoods(arrTicket) {
    this.tableTickets.innerHTML = '';
    for (const item of arrTicket) {
      const itemDate = new Date(item.created);
      const date = this.convertDate(itemDate.getDate());
      const month = this.convertDate(itemDate.getMonth() + 1);
      const year = this.convertDate(itemDate.getFullYear());
      const hours = this.convertDate(itemDate.getHours());
      const minut = this.convertDate(itemDate.getMinutes());
      const itemCreated = `${date}.${month}.${year} ${hours}:${minut}`;
      const ticket = document.createElement('div');
      ticket.className = 'item-ticket';
      ticket.dataset.id = item.id;
      ticket.innerHTML = `
      <div class="div-status"><span class="change-status pointer" data-status="${item.status}"></span></div>
      <div class="td-name">${item.name}
      </div>
      <div class="td-created">${itemCreated}</div>
      <div class="change-del">
        <span class="change-ticket pointer"></span>
        <span class="del-ticket pointer"></span>
      </div>
      `;
      this.tableTickets.appendChild(ticket);
    }
  }

  convertDate(value) {
    const rValue = value < 10 ? `0${value}` : value;
    return rValue;
  }
}
