// ***4.1인라인 이벤트 
/* 인라인 이벤트는 html 요소 안에 속성을 직접 추가해 
이벤트를 처리하는 가장 기본적인 방식입니다. 
웹 표준에서는 문서와 css 자바스크립트의 분리 원칙을 권장합니다. */

/*요소내에 이벤트 핸들러 속성을 추가하고 그 안에 자바스크립트 
코드를 작성한다. 대표적인 이벤트 속성을 알아보자 */

// 1. onclick   마우스를 클릭할때 
// 2. onmouseover 요소안에 마우스가 들어갔을 때 
// 3. onmouseout  요소에서 마우스가 벗어났을 때 
// 4. onkeydown  키보드를 입력했을 때 
// 5. onkeyup  키를 눌렀다 놓을 때 
// 6. onfocus.onblur  요소가 선택됐거나 해제됐을 때 
// 7. onsubmit   폼 전송 이벤트가 발생했을 때 



// ***4.2   이벤트 핸들러
let h1 = document.querySelector('h1');
h1.innerHTML = '문서를 로딩했습니다.';


// 이벤트 객체와 this 
// this는 클릭한 문서 객체 자신을 의미 합니다 .
h1.onclick = function(){
  this.innerHTML = '클릭했습니다.'
}



// 이벤트 리스너  문서 객체.addEventListener(이벤트 타입, 리스너)  
// 이벤트 타입(event type) 이벤트 속성을 지정, 앞에 on을 붙이지 않는다. 
// 리스너  이벤트가 발생할 때 호출할 함수 또는 메서드 


// 두가지 이벤트 속성으로 hover처리 
let box = document.getElementById('box');
// 마우스 오버 
box.addEventListener('mouseover', function() {
  box.setAttribute('class', 'hover')
})
// 마우스 아웃 
box.addEventListener('mouseout', function() {
  box.removeAttribute('class')
})

// submit 이벤트와 기본 동작 방지 
// 폼 요소에서 버튼을 누르면 우선적으로 submit이벤트가 발생합니다. 경우에 따라 
// 서버에 제출하는 것이 아닌 오프라인으로 수행하는 경우라면 이러한 기본 이벤트를 
// 차단해야 합니다. 기본 이벤트를 해제하는 메서드로는 preventDefault()메서드가
// 있습니다. 


// 폼 객체 지정 
let q = document.getElementById('frm');

let address = ['김철수', 'email:kcs@gmail.com']

function addr_search(event) {
  let textarea = q.txt

  // textarea에 주소록 표시 
  textarea.value = '이름 / 주소 \n';
  textarea.value += address[0] + ' , ' + address[1] + '\n';
}

// 폼 제출 시 
q.addEventListener('submit', function(event) {
  event.preventDefault();  
  addr_search();
});







// 4.7 드래그 앤 드롭 구현 
const drag = document.getElementById('drag');

//  터치 제어를 위한 객체 선언 
let touch = {
  tstart:function() {
  },
  tend:function(){
  },
  tmove:function(e){

  // 현재 터치 이벤트의 위치(배열 )감지 
  let touchobj = e.changedTouched[0];

  // 현재 손가락 위치 
  let x = perseInt(touchobj.clientX),
      y = perseInt(touchobj.clientY),
      ex = x - 100;
      ey = y - 200;

      drag.innerHTML = '만지는 중입니다.'
      this.style.background = 'yellow';

      this.style.left = ex+'px';
      this.style.top = ey+'px'
} 

}//객체 끝


// 터치 이벤트 리스너 추가 
drag.addEventListener('touchstart', touch.tstart);
drag.addEventListener('touchend', touch.tend);
drag.addEventListener('touchmove', touch.tmove);

