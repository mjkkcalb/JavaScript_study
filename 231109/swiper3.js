const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

// main 높이값 계산
const mainHt = () => {
  main.style.height = `${
    innerHeight - nav.offsetHeight - footer.offsetHeight
  }px`;
  main.style.marginTop = `${nav.offsetHeight}px`;
};
mainHt();
addEventListener("resize", mainHt);

// swiper
const mainSlide = new Swiper(".main-slide", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    415: {
      // 화면의 가로값이 415보다 크거나 같으면 실행
      slidesPerView: 1,
    },
    961: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

mainSlide.on("slideChange", function () {
  console.log("slide changed");
});

const menuLists = document.querySelectorAll(".global-menu a");

menuLists.forEach((menu, idx) => {
  // 메뉴를 클릭하면 해당 메뉴에만 .colorOn이 적용되게
  menu.addEventListener("click", (evt) => {
    evt.preventDefault();

    menuLists.forEach((a) => {
      a.classList.remove("colorOn");
    });

    evt.target.classList.add("colorOn");

    mainSlide.slideToLoop(idx);
  });
});
