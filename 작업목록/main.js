
// 변수 초기화 
const title = document.getElementById('title');
const list = document.getElementById('list');
const li = list.getElementsByTagName('li');
const addBtn = document.getElementById('add_btn');

for(let i = 0; i< li.length; i++) {
    li[i].addEventListener('click', activeItem)
}

function activeItem(){
    // 해당 목록을 클릭하면 제목 영역에 표시 
    // title.innerHTML = this.innerText;

    // 목록 스타일 초기화 
    for(let i = 0; i <li.length; i++) {
        li[i].removeAttribute('class');
    }

    this.setAttribute('class', 'active')
}

addBtn.addEventListener('click', function(){
    let txt = prompt('제목 입력');
    list.innerHTML += '<li>' + txt + "</li>";
});

function activeItem(event) {
    // 클릭한 노드가 li이면 
    if(event.target.nodeName == 'LI') {
        title.innerHTML = event.target.innerText;
    }
    // 목록 스타일 초기화 
    for(let i = 0; i < event.target.parentNode.children.length; i++){
        event.target.parentNode.children[i].removeAttribute('class')
    }

    // 클릭한 목록 스타일 지정 
    event.target.setAttribute('class', 'active')
}

list.addEventListener('click', activeItem)
