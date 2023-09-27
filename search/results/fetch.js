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

// Get Data v1
// $("#form").submit((e) => {
//   e.preventDefault();
//   var url = $("#url").val();
//   var number = $("#number").val();
//   getBlogPosts(url, number);
// });

// $("#number").change((e) => {
//   number = $(this).val();
// });

// Get Data v2 Form URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get("furl");
const number = urlParams.get("fnumber");

console.log(url, number);
$("#p1").append("Tìm kiếm trên: ", url);
$("#p2").append("Số bài viết: ", number);

// WordPress API
const wpUrlApiPluginVersion = "/wp-json/wp/v2/posts?_embed";
const wpUrlApiPluginFields = "&per_page=";

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
        <td><a href="/search/queries/?d=${url}&id=${id}&s=${slug}">${title.rendered}</a></a></td>     
        <td>${id}</td>    
        <td><a href="${link}">${slug}</a></td>
        <td>${date}</td>    
        </tr>
        `;
      });
      $("#data").append(result);
      hideSpinner();
    },
  });
}
getBlogPosts(url, number);
/**
 *
 */
