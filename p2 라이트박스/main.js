'utf-8';

// 인디케이터 초기화 
const indicator = document.querySelectorAll('.indicator button');
const lightbox = document.querySelector('#lightbox');
const block = document.querySelector('#block') //라이트박스 배경

console.log(block)

// 라이트박스 표시 
function lightbox_open(num) {
  lightbox.setAttribute('class', 'active');
  block.setAttribute('class', 'active');
  change_img(num);
  indicator[num-1].focus()
}

// 라이트박스 닫기 
function lightbox_close() {
  lightbox.removeAttribute('class');
  block.removeAttribute('class');
}

// 이미지 전환 표시 함수 
function change_img(val) {
  let imgs = document.querySelectorAll('figure > img');

  for(let i = 0; i<imgs.length; i++) {
    imgs[i].removeAttribute('class');
  }
  imgs[val-1].setAttribute('class', 'active')
}