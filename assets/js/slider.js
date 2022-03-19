import { chicas } from "./chicas.js";
const catalogoContainer = document.querySelector(".catalogo-container");
/*En este foreach se crean todas las class y atributos que tiene cada section del slider */
chicas.map((chica) => {
  const swiper = document.createElement("div");
  swiper.classList.add("swiper", "mySwiper");
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");
  catalogoContainer.appendChild(swiper);
  swiper.appendChild(swiperWrapper);
  swiper.appendChild(swiperPagination);

  /*Se crean los elementos de cada slider */
  chica.fotos.map((foto) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    const nombreChica = document.createElement("h2");

    /*Aqui va el nombre de la chica por cada slider*/
    nombreChica.textContent = chica.nombre;
    swiperSlide.appendChild(nombreChica);

    const imagen = document.createElement("img");
    imagen.src = foto.url;
    imagen.alt = chica.nombre;
    swiperSlide.appendChild(imagen);
    /*Agremamos estos elementos a la calse padre (swiper-wrapper) */

    swiperWrapper.appendChild(swiperSlide);
  });
});
var slider = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
