
'use-strict'
const titleName = document.getElementById('main_title');
console.log(titleName);

titleName.style.color = 'green';
titleName.style.background = 'gray';
titleName.innerHTML = "javascript로 문서를 조작"

// let li = document.querySelector('li');
// li.style.color = "blue";
// li.style.background = 'yellow'

let li = document.querySelectorAll('li');

// 모든 li요소에 속성 적용 
for(let i = 0; i<li.length; i++) {
  li[i].style.color = 'green'
  // 모든 li중 인덱스 1번째 li에만 적용 
  li[1].style.backgroundColor = 'yellow'
}

// innerHTML, innerText 
const content = document.getElementById('content');
// text 삽입 
content.innerText = "<h1>new Text!! </h1>"
content.innerHTML += "<h1>innerHTML!! </h1>"

// setAttribute() 메서드 
function changeColor() {
  let box = document.getElementById('box');
  box.setAttribute('class', 'box')

// getAttribute() 메서드 
 let getAttr = box.getAttribute('class');
 alert(getAttr)
}

// removeAttribute()메서드 
function changeColor2() {
  let box2 = document.getElementById('box2');
  box2.setAttribute('class', 'box')
  box2.removeAttribute('class')

}


