$(document).ready(function () {
  var url = "https://jsonplaceholder.typicode.com/posts";
  $.ajax({
    type: "GET",
    dataType: "JSON",
    url: url,
    success: function (data) {
      var result = "";
      data.forEach((e) => {
        var { id, userId, title, body } = e;
        result += `
          <tr>
          <td>${id}</td>
          <td>${userId}</td>
          <td>${title}</td>
          <td>${body}</td>
          </tr>
        `;
      });
      $("table").append(result);
    },
  });
  // Get data form API
  // var url = "https://jsonplaceholder.typicode.com/posts";
  // var table = document.querySelector("table");
  // fetch(url)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     data.forEach(function (element) {
  //       table.innerHTML += `
  //                               <tr>
  //                               <td>${element.id}</td>
  //                               <td>${element.userID}</td>
  //                               <td>${element.title}</td>
  //                               <td>${element.body}</td>
  //                               </tr>
  //                             `;
  //     });
  //   })
  //   .catch(function (error) {
  //     return console.log("Không thành công");
  //   });
});
