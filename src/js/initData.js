export default function initData() {
  const params = new URLSearchParams();
  params.append('name', 'Поменять краску');
  params.append('description', 'Поменять краску в принтере, ком. 404');

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://coursar-heroku.herokuapp.com/');
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseText);
    }
  });
  xhr.send(params);
}
