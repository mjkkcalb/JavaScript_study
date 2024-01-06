// ul : 색상, 밑줄
const h2 = document.querySelectorAll("h2");
h2.forEach((h2) => {
  h2.style.color = "#445D48";
  h2.style.textDecoration = "underline";
});

const evt1 = document.querySelector("ol li:nth-child(1)");
const evt2 = document.querySelector("ol li:nth-child(2)");
const evt3 = document.querySelector("ol li:nth-child(3)");
const evt4 = document.querySelector("ol li:nth-child(4)");
const evt5 = document.querySelector("ol li:nth-child(5)");
const evt6 = document.querySelector("ol li:nth-child(6)");
const evt7 = document.querySelector("ol li:nth-child(7)");
const evt8 = document.querySelector("ol li:nth-child(8)");
const evt9 = document.querySelector("ol li:nth-child(9)");

evt1.addEventListener("click", () => alert("클릭했습니다."));
evt2.addEventListener("dblclick", () => alert("더블 클릭했습니다."));
// evt3.addEventListener("mousemove", () => console.log("마우스가 움직입니다"));
evt4.addEventListener("mousedown", () => alert("마우스로 눌렀습니다"));
evt5.addEventListener("mouseup", () => alert("눌렀다가 뗐을 때"));
// 하위 노드에 영향을 줌. 이벤트 캡쳐링
evt6.addEventListener("mouseover", () => (evt6.style.background = "orange"));
evt7.addEventListener("mouseout", () => (evt7.style.background = "#B931FC"));
// 하위 노드에 영향을 주지 않음
evt8.addEventListener(
  "mouseenter",
  () => (evt8.style.border = "3px solid #000")
);
evt9.addEventListener(
  "mouseleave",
  () => (evt9.style.border = "3px solid #000")
);
