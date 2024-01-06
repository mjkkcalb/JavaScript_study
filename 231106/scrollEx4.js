const nav = document.querySelector('nav');
const logo = document.querySelector('#logo');
const gnb = document.querySelector('#gnb');

// 스크롤에 따른 nav 변화
addEventListener('scroll', () => {
  const headerBox = document.querySelector('#header_box').offsetTop;
  // const content1 = document.querySelector('#content1').offsetTop;
  console.log(headerBox);

  if(scrollY > headerBox) {
    nav.classList.add('active');
    gnb.style.top = '100px';
  } else {
    nav.classList.remove('active');
    gnb.style.top = '200px';
  }
});

// 로고 클릭시 맨 위로 이동
logo.addEventListener('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 해당 박스로 부드러운 이동
const gnbA = document.querySelectorAll('#gnb a');
const boxes = document.querySelectorAll('article');

// gnbA[0].addEventListener('click', () => { scrollTop() });
gnbA.forEach( (gnb, idx) => {
  gnb.addEventListener('click', e => {
    e.preventDefault();

    const getBox = boxes[idx].offsetTop - 100;
    scrollTo({
      top: getBox,
      behavior: 'smooth'
    });
  })
});

// 모바일 토글 버튼
const toggleBtn = document.querySelector('#toggle_btn');
const gnbLis = document.querySelectorAll('#gnb li');

/*
toggleBtn.addEventListener('click', function () {
  this.classList.toggle('closeMenu');
  gnb.classList.toggle('showMenu');
});
*/
toggleBtn.addEventListener('click', e => {
  const target = e.currentTarget;

  target.classList.toggle('closeMenu');
  gnb.classList.toggle('showMenu');

  // 해당 메뉴 클릭시 닫힘
  gnbLis.forEach(li => {
    li.addEventListener('click', () => {
      target.classList.remove('closeMenu');
      gnb.classList.remove('showMenu');
    });
  })

});
