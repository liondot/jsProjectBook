'use-strict';

// 날짜 변수 2016년 7월 
let new_year = 2022, new_month = 6; 
// 특정 연월을 시작일부터 조회 (year, month, date )
d = new Date(new_year, new_month, 1),
// 월별 일수 구하기 
d_length = 32 - new Date(new_year, new_month, 32).getDate();
year = d.getFullYear();
month = d.getMonth();
date = d.getDate();
day = d.getDay();

// caption 영역 날짜 표시 객체 
const caption_year = document.querySelector('.year');
const caption_month = document.querySelector('.month');
const start_day = document.querySelectorAll('tr td');

// 한 달 치 날짜를 테이블에 시작 요일부터 순서대로 표시 
for(let i = day; i < day + d_length; i++){
  start_day[i].innerHTML = date;
  date++;
}

// caption 연도, 월 표시 
caption_year.innerHTML = year;
caption_month.innerHTML = month + 1;

// 특정 시간때가(2022년) 아닌사용자의 요청에 따라 월별 달력 출력 하는 함수
function calender(new_year, new_month) {
  // 특정 연월을 시작일부터 조회(year, month, date )
  let d = new Date(new_year, new_month-1, 1),
    // 월별 일수 구하기 
    d_length = 32 - new Date(new_year, new_month-1, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay(),

    // caption 영역 날짜 표시 객체 
    caption_year = document.querySelector('.year');
        caption_month = document.querySelector('.month');
    let start_day = document.querySelectorAll('tr td');

    // 테이블 초기화 
    for(let i = 0; i<start_day.length; i++){
      start_day[i].innerHTML = '$nbsp';
    }


  }

  
  (function() {
    let prev = document.getElementById('prev');
    next=document.getElementById('next');
    year=new Date().getFullYear();
    month = new Date().getMonth() + 1;

    calender(year, month);

    // 이전 달 , 다음 달 버튼 이벤트 핸들러 
    prev.onclick = function(){
      calender(year, --month);
    };
    next.onclick = function(){
      calender(year, ++month)
    }

  })();

