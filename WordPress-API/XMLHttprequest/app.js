// Config
const url = "https://jsonplaceholder.typicode.com/posts";
const table = document.querySelector("table");
const request = new XMLHttpRequest();
const syncs = true;
const method = "GET";

request.open(method, url, syncs);
request.onload = () => {
  let data = JSON.parse(request.responseText);
  data.forEach((el) => {
    var { id, userID, title, body } = el;
    table.innerHTML += `
                          <tr>
                          <td>${id}</td>
                          <td>${userID}</td>
                          <td>${title}</td>
                          <td>${body}</td>
                          </tr>
                        `;
  });
};
request.send();
