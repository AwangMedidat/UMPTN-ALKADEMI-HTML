$(window).on("load", function () {
  var elem = document.querySelector(".mansory");
  var msnry = new Masonry(elem, {
    itemSelector: ".mansory-item",
    columnWidth: 200,
    gutter: 20,
    columnWidth: ".mansory-sizer",
    percentPosition: true,
  });
});
