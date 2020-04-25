const server = 'https://coursar-heroku.herokuapp.com/';
// const server = 'http://localhost:7070';

export default class XHR {
  addTicket(name, description) {
    return new Promise((resolve) => {
      const params = new URLSearchParams();
      params.append('name', name);
      params.append('description', description);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${server}/tickets`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          return resolve(xhr.responseText);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send(params);
    });
  }

  getTickets() {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${server}/tickets`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const tickets = JSON.parse(xhr.responseText);
          return resolve(tickets);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send();
    });
  }

  changeTickets(id, name, description) {
    return new Promise((resolve) => {
      const params = new URLSearchParams();
      params.append('id', id);
      params.append('name', name);
      params.append('description', description);

      const xhr = new XMLHttpRequest();
      xhr.open('PUT', `${server}/tickets`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          return resolve(xhr.responseText);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send(params);
    });
  }

  getDescription(id) {
    return new Promise((resolve) => {
      const params = new URLSearchParams();
      params.append('id', id);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${server}/tickets?${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const tickets = xhr.responseText;
          return resolve(tickets);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send();
    });
  }

  delTicket(id) {
    return new Promise((resolve) => {
      const params = new URLSearchParams();
      params.append('id', id);

      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', `${server}/tickets?${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const tickets = xhr.responseText;
          return resolve(tickets);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send();
    });
  }

  changeStatus(id, status) {
    return new Promise((resolve) => {
      const params = new URLSearchParams();
      params.append('id', id);
      params.append('status', status);

      const xhr = new XMLHttpRequest();
      xhr.open('PATCH', `${server}/tickets?${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const tickets = xhr.responseText;
          return resolve(tickets);
        }
        console.log(xhr.responseText);
        return xhr.responseText;
      });
      xhr.send();
    });
  }
}
