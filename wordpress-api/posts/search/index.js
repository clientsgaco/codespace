// Get Parameters
function loadContentSearch() {
  console.log("Load: INDEXD");

  // Grab the query string
  const queryString = window.location.search;
  // console.log(queryString);

  // Parse the query string’s parameters
  const urlParams = new URLSearchParams(queryString);

  // Search any of its parameters
  const contentID = urlParams.get("id");
  const contentName = urlParams.get("name");
  console.log(contentID, contentName);

  // Load content to html
  $("#loadName").append("Nguồn: ", contentName);
  $("#loadID").append("ID: ", contentID);

  // WordPress API Rule
  const wpApiPostRule = "/wp-json/wp/v2/posts?include=";

  // Fetch data
  showSpinner();
  $.ajax({
    method: "GET",
    url: `https://${contentName}${wpApiPostRule}${contentID}`,
    success: function (data) {
      console.log(data);
      var contentDisplays = "";
      data.forEach((c) => {
        contentDisplays = `${c.content.rendered}`;
      });
      $("#contentDisplay").append(contentDisplays);
      hideSpinner();
    },
  });
}

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
