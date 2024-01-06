/*

  event.target
    실제 이벤트가 발생하는 요소를 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환
  event.currentTarget
    이벤트 리스너가 있는 요소를 반환.
    이벤트르르 등록해 놓은 요소 반환(일반적으로는 버튼)    
*/

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const ul = document.querySelector("ul");
const list = document.querySelector("li");
const link = document.querySelector("a");

//box1에 이벤트 바인딩
box1.addEventListener("click", (evt) => {
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);
});

/*
  box1에 이벤트 binding 한 상태에서 
  box1 클릭: target -> div, currentTarget -> div
  h1 클릭: target -> h1(실제 이벤트발생 지점), currentTarget -> div
  h2 클릭: target -> h2, currentTarget -> div

*/

box2.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(`target -> ${e.target.tagName} `);
  console.log(`currentTarget -> ${e.currentTarget.tagName} `);

  /*
  box2 클릭: target -> div, currentTarget -> div
  ul 클릭: target -> ul, currentTarget -> div
  li 클릭: target -> li, currentTarget -> div
  a 클릭: target -> a, currentTarget -> div
*/

  //e.target.style.backgroundColor = "tomato";

  const target = e.target;
  target.style.color = "#fff";
  target.style.backgroundColor = "orange";
});
