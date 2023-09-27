$(document).ready(() => {
  // Get Data
  $("#form").submit((e) => {
    e.preventDefault();
    var url = $("#url").val();
    var number = $("#number").val();
    getBlogPosts(url, number);
    queryContent(url);
  });

  $("#number").change((e) => {
    number = $(this).val();
  });

  //End ready ajax
});

// Get Blog content
$(document).ready(function () {
  $("#c").click(function () {
    $("#loadContent").load("js/view.js");
  });
});
