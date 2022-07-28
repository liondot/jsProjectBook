// 1. 해당 월의 날짜 정보 조회 
// 2. caption 정보와 날짜 표기 객체 지정 
// 3. 당울 시작일 위치 지정 및 최대 일수 출력 
// 4. caption 정보와 날짜 표시 
// 5. 달력 조회 기능 추가(기능 개선)

// Date 객체 메서드 
// getFullYear()  연
// getMonth()     달, 월 0부터 11의 값을 반환
// getDay()      일, 1부터 31의 값을 반환
// getHours()     시
// getMinutes()   분
// getSeconds()   초

// 시간 출력 
let d = new Date(),   //date 객체 생성
h = d.getHours(), //시를 구함
m = d.getMinutes(), //분을 구함
s = d.getSeconds() //초를 구함


// 24시간제 -> 12시간제로 변경 
let h12 = (h > 12) ? ( h - 12) : h  //?삼항연산자 사용 : 시간이 12시가 넘으면 12를 빼고 표시

// 12시간제 - 오전 오후 판정 
let ampm = ( h < 12 ) ? "오전" : "오후";

//분 2자릿수 표시 
let min_0 = (m < 10) ? "0" : "";

// 초 2자릿수 표시 
let sec_0 = ( s < 10) ? "0" : "";


time = ampm + h12 + ':' + min_0 + m + ':' + sec_0 + s ;

document.write(time);  //fri Nov 11 2016 00:59:09 GMT +0900 대한민국 표준시

document.write('</br>')

// 요일 출력 
let year = d.getFullYear(),
month = d.getMonth(),
date = d.getDate(),
day = d.getDay()

// 요일을 판다 
switch(day) {
  case 0: var dd = "일"; break;
  case 1: var dd = "월"; break;
  case 2: var dd = "화"; break;
  case 3: var dd = "수"; break;
  case 4: var dd = "목"; break;
  case 5: var dd = "금"; break;
  case 6: var dd = "토"; break;
  default:break;
}

document.write(year + "년");
document.write((month + 1) + "월 ");
document.write(date + "일");
document.write(dd + "요일<br>");

