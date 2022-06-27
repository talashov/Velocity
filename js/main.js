$(function () {
  const openPopUp = document.getElementById("open");
  const closePopUp = document.getElementById("close");
  const popUp = document.getElementById("popup");

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
  });

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    openPopUp.classList.add("hiden");
  });

  closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
  });

  closePopUp.addEventListener("click", () => {
    openPopUp.classList.remove("hiden");
  });

  // $('.works__slider').slick();
  $('.works__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

});
