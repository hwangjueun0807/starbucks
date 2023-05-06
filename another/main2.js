const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
  }
}, 300));

//_.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7, // 0.7초후 1.4초 후 2.1초후 2.7초 후 진행될 것
    opacity:1,
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical', //방향을 의미
  autoplay:true, //자동재생 여부
  loop: true // 반복재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidePerView:3, // 한번에 보여줄 슬라이드 개수
  spaceBetween:10, // 슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이가 가운데 보이기
  loop:true,
  autoplay:{
    delay:5000
  }
});