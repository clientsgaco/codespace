$(document).ready(function () {
  // Filter search
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  // Get data form API
  var url = "https://reqres.in/api/users?page=2";
  $.ajax({
    dataType: "JSON",
    url: url,
    success: function (datas) {
      var result = "";
      datas.data.forEach((item) => {
        const { first_name, last_name, email, avatar } = item;
        result += `
          <tr>
            <td><strong>${first_name}</strong></td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td><img src="${avatar}" width="30" class="rounded-circle"></td>
          </tr> 
        `;
      });
      $("table").append(result);
    },
  });
});
