!(function (n) {
  function e() {
    1200 > $(window).width()
      ? $(".nav-wrapper .nav-wrap-inner").hide()
      : $(".nav-wrapper .nav-wrap-inner").show();
  }
  (n.fn.menumaker = function (e) {
    var s = n(this),
      i = n.extend({ title: "Menu", format: "dropdown", sticky: !1 }, e);
    return this.each(function () {
      return (
        s.prepend('<div id="menu-button">' + i.title + "</div>"),
        n(this)
          .find("#menu-button")
          .on("click", function () {
            n(this).toggleClass("menu-opened");
            var e = n(this).next(".nav-wrap-inner");
            e.hasClass("open")
              ? e.slideUp("fast").removeClass("open")
              : (e.slideDown("fast").addClass("open"),
                "dropdown" === i.format &&
                  e.find(".nav-wrap-inner").slideDown());
          }),
        s.find("li ul").parent().addClass("has-sub-item"),
        (multiTg = function () {
          s
            .find(".has-sub-item")
            .prepend('<span class="submenu-button"></span>'),
            s.find(".submenu-button").on("click", function () {
              n(this).toggleClass("submenu-opened"),
                n(this).siblings("ul").hasClass("open")
                  ? n(this).siblings("ul").removeClass("open").slideUp("fast")
                  : n(this).siblings("ul").addClass("open").slideDown("fast");
            });
        }),
        "multitoggle" === i.format ? multiTg() : s.addClass("dropdown"),
        !0 === i.sticky && s.css("position", "fixed"),
        (resizeFix = function () {
          n(window).width() > 1200 && s.find("ul ul").show(),
            1200 > n(window).width() &&
              s.find("ul ul").hide().removeClass("open");
        })(),
        n(window).on("resize", resizeFix)
      );
    });
  }),
    $(".nav-wrapper").menumaker({
      title: "<span></span>",
      format: "multitoggle",
    }),
    $(window).on("resize", function () {
      e();
    }),
    e();
  let s = $(".header").outerHeight();
  $(".header-main.love-sticky")
    .parent(".header")
    .css({ height: s + "px" });
  var i = $(".love-sticky");
  $(window).on("scroll", function () {
    100 > $(window).scrollTop()
      ? (i.removeClass("sticky fadeInDown"), i.addClass("fadeInDowns"))
      : (i.addClass("sticky fadeInDown"), i.removeClass("fadeInDowns"));
  });
})(jQuery);
