const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});
/* search라는 클래스를 가지는 div요소를 클릭하면 어떤 함수가 실행되는데 
그 함수내용은 검색부분인 input요소에 focus를 적용하라.*/

searchInputEl.addEventListener('focus', function () {
  //Logic..
  searchEl.classList.add('focused');
  /* search라는 클래스를 가지는 div 요소에 클래스를 추가한다.*/
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  /*searchInputEl 에다가 HTML의 어떠한 속성을 지정함. */
});

searchInputEl.addEventListener('blur', function () {
  /* focus가 해제되었을 때  = blur */
  //Logic..
  searchEl.classList.add('focused');
  /* search라는 클래스를 가지는 div 요소에 클래스를 추가한다.*/
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  /*searchInputEl 에다가 HTML의 어떠한 속성을 지정함. */
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023 현재의 년도가 나타난다.