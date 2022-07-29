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