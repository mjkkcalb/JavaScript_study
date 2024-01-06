const hWrapper = document.querySelector(".horizontal-wrapper");
const stickyBox = document.querySelector(".sticky-box");
const horizontalBox = document.querySelector(".horizontal-box");

const calcHt = (ht) => {
  return (
    ht.scrollWidth -
    document.documentElement.clientWidth +
    document.documentElement.clientHeight
  );
};

hWrapper.style.height = `${calcHt(horizontalBox)}px`;

const scrolled = () => {
  console.log(stickyBox.offsetTop);
  console.log(stickyBox.offsetParent); // horizontal-wrapper
  horizontalBox.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
};

addEventListener("scroll", scrolled);

/* 
  .offsetTop;
  offsetParent를 기준으로 거리를 알려줌
  offset은 offsetParent의 가장 가까운 포지션을 기준으로 거리값 반환
  부모 요소에 포지션이 없는 경우 body 기준
*/
