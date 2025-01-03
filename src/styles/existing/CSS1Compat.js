$(document).ready(function () {
  var $loading = $("#loading-pane").hide();
  $(document)
    .ajaxStart(function () {
      $loading.show();
    })
    .ajaxStop(function () {
      $loading.hide();
    });

  var $imgs = $(".CSS1Compat").find("img");
  $imgs.each(function (e) {
    if ($(this).attr("title") != undefined) {
      var style = $(this).attr("style");

      var text = $(this).attr("title");

      if (style != undefined) {
        style = 'style="' + style + '"';
      } else {
        style = "";
      }
      $(this).wrap(
        '<div class="preview" ><div class="preview-img" ' +
          style +
          "></div></div>"
      );
      $(this)
        .parent()
        .append(
          '<div class="preview-overlay"><div class="preview-overlay-body">' +
            text +
            "</div></div>"
        );
    }
  });
});
