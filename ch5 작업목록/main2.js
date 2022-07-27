'utf-8';

const title = document.getElementById('title');
const addBtn = document.getElementById('add_btn');
const list = document.getElementById('list');
const li = list.querySelectorAll('li')

// for (let i = 0; i < li.length; i++) {  
//   li[i].addEventListener('click', activeEvent)
// }

/*목록추가로 들어간 li는 배열이 변경되는 동적인 상황이 발생되기 때문에 
li 변수에는 이벤트 리스너가 인식되지 못한다. 
이럴때는 li부모 요소인 list변수에 이벤트리스너를 지정해야 된다 */

list.addEventListener('click', activeEvent)


function activeEvent(event) {

  if(event.target.nodeName == 'LI') {
  title.innerHTML = event.target.innerText;
  }

  // 선택한 목록에만 배경색이 들어가도록 초기화 
  // for(let i = 0; i < li.length; i++) {
  //   li[i].removeAttribute('class')
  // }

  for(let i = 0; i < event.target.parentNode.children.length; i++) {
    event.target.parentNode.children[i].removeAttribute('class');
  }

  // 클릭한 목록 스타일 지정 
  // this.setAttribute('class', 'active')
  event.target.setAttribute('class', 'active');


}

// 제목 입력 코드 
addBtn.addEventListener('click', function() {
  let txt = prompt('할일을 입력하세요!');
  list.innerHTML += '<li>' + txt + '</li>'
});

