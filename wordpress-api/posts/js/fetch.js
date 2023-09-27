// WordPress API
const wpUrlApiPluginVersion = "/wp-json/wp/v2/posts?_embed";
const wpUrlApiPluginFields = "&per_page=";

var hostNamUrl = location.hostname;

// Fetching data
function getBlogPosts(url, number) {
  showSpinner();
  $.ajax({
    method: "GET",
    url: `https://${url}${wpUrlApiPluginVersion}${wpUrlApiPluginFields}${number}`,
    success: function (data) {
      console.log(data);
      var result = "";
      data.forEach((post) => {
        const { id, link, title, date, slug, status } = post;
        result += `
        <tr>
        <td>${id}</td>
        <td><a href="${link}">${title.rendered}</a></td>
        <td><a href="/wordpress-api/posts/search/?name=${url}&id=${id}&slug=${slug}" target="_blank">Xem thêm...</a></td>   
        <td>${status}</td>
        <td>${date}</td>    
        </tr>
        `;
      });
      $("#data").append(result);
      hideSpinner();
    },
  });
}

/**
 *
 */

// Spin before fetching
const spinner = document.getElementById("spinner");
function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 500);
}
function hideSpinner() {
  spinner.className = spinner.className.replace("show", "hidden");
}
