$(document).ready(() => {
  // Get Data
  $("#form").submit((e) => {
    e.preventDefault();
    var url = $("#url").val();
    var number = $("#number").val();
    getBlogPosts(url, number);
  });

  $("#number").change((e) => {
    number = $(this).val();
  });

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

  // Fetching data
  function getBlogPosts(url, number) {
    showSpinner();
    $.ajax({
      method: "GET",
      // url: `https://${url}/wp-json/wp/v2/posts?fields[]=title&_fields[]=link&_fields[]=title&_fields[]=date&_fields[author]=name&_fields[]=status&per_page=${number}`,
      url: `https://${url}/wp-json/wp/v2/posts?_embed&per_page=${number}`,
      success: function (data) {
        console.log(data);

        data.forEach((post) => {
          $("#data").append(`
        <tr>
        <td>${post.id}</td>
        <td><a href="${post.link}" target="_blank">${post.title.rendered}</a></td>
        <td>${post.date}</td>
        <td>${post.status}</td>
        </tr>
        `);
        });
        hideSpinner();
      },
    });
  }
  //End ready ajax
});
