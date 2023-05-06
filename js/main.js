const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//document는 html 자체. window는 브라우저 창.
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // 문자값은 ''안에 넣어서 입력. 숫자는 그대로 입력.
    });
    //버튼 보이기!!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
//단위- 밀리세컨드 300 = 0.3초를 의미. window 부분의 스크롤 이벤트를 통해서 화면을 스크롤하면 수십개의 함수가 실행되는 것을 0.3초 단위로 제한을 줘서 함수가 우르르 쏟아지는 것을 방지.
//._throttle(사용하려는 함수, 시간(밀리세컨드 단위))

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo :0
  })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7 // 지연 시간. 0.7초 1.4초 2.1초 2.8초 ...
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생 여부
  loop: true //반복재생 여부
});
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', //기본값임. 이 부분은 명시하지 않아도 적용됨.
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이게 하기
  loop: true, //반복재생 여부
  //autoplay:{
  //  delay : 5000 // 5초 
  //  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new  Swiper('.awards .swiper-container',{
  direction:'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween:30,
  slidesPerView:5,// 하나의 화면에 보여질 슬라이드 개수
  navigation : {
    prevEl :'.awards .swiper-prev',
    nextEl :'.awards .swiper-next'
  }

});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  //isHidePromotion 값이 false이므로 true를 반환. 반대로 true이면 false를 반환.
  if (isHidePromotion) {
    //숨김 처리!!
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!!
    promotionEl.classList.remove('hide');

  }
});
// 위의 구문 해석
/* promotion 이라는 클래스를 가진 element를 찾아서 promotionEl 라는 변수에 할당을 하고,
toggle-promotion 이라는 클래스를 가진 element를 찾아서 promotionToggleBtn 이라는 변수에 할당을 한다.
isHidePromotion(=promotion이라는 변수가 숨겨져 있는가?)이 false 인데 
isHidePromotion = false 는 promotion이라는 변수가 숨겨져 있지 않다는 뜻이고,
promotionToggleBtn 을 click을 하면 어떠한 함수가 실행이 되고, 그 함수에서 isHidePromotion 의 값을 체크해서 
그것의 반댓값을 다시 할당함.
처음에는 false이므로 그것의 반댓값인 true가 isHidePromotion이라는 변수에 다시 재할당이 되고
그 재할당되는 값은 true이므로 if 조건문이 실행이 된다.
*/

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // -1 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay) //몇 초 뒤에 애니메이션을 시작할 것인지를 설정
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정함.
      triggerHook: .8,
      // viewport에 대해 상대적으로 어느 시점에서 보여줄 건지를 설정합니다.
      //0~1 사이의 숫자를 입력하며, 문자열도 가능
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


