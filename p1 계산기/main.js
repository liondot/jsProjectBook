// 변수 초기화 
const frm = document.frm;  //form객체 지정
const myId = frm.myId;     //id 입력란(myId)객체 지정
const pwd = frm.pwd;
const sendBtn = document.frm.send;   //전송 버튼 객체 지정


sendBtn.onclick = function() {
  let newId = myId.value;
  newPwd = pwd.value;

  // 빈값 검사 
  if(newId == '' || newPwd == '' ){
    alert('아이디 또는 비밀번호가 입력되지 않았습니다.')
  } else {
    alert(myId.value + '님 환영합니다.')
  }
}

