/**
 * Template: View Content
 *
 */

$("#form2").submit((e) => {
  e.preventDefault();
  var url2 = $("#url2").val();
  queryContent(url2);
});

// Fetching data
function queryContent(url2) {
  showSpinner();
  $.ajax({
    method: "GET",
    url: `https://${url2}${wpUrlApiPluginVersion}${wpUrlApiPluginFields}1`,

    success: function (data) {
      console.log(data);
      var resultView = "";
      data.forEach((post) => {
        const { content } = post;
        resultView += `
        <tr>
        <td><span>${content.rendered}</span></td> 
      </tr>
        `;
      });
      $("#loadContent").append(resultView);
      hideSpinner();
    },
  });
}

/**
 *
 */
