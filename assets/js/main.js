(function ($) {
  "use strict";

  /* 04: Testimonial Slider */
  $(".banner-slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });


 

  /* 06: Section Name Highlight */
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".side-bar-list li");
  window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 220) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };



})(jQuery);
