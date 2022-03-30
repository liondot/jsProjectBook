// 날짜 변수 2022년 7월 
var new_year = 2022, new_month = 6 //객체의 index 번호는 0부터 시작 
d = new Date(new_year, new_month, 1),
// 월별 일수 구하기 
d_length = 32 - new Date(new_year, new_month, 32).getDate(),
year = d.getFullYear(),
month = d.getMonth(),
date = d.getDate(),
day = d.getDay();

// caption 영역 날짜 표시 객체 
var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');
var start_day = document.querySelector('tr td');

// 한 달 치 날짜를 테이블에 시작 요일부터 순서대로 표시
for(var i = day; i < day + d_length; i++){
  start_day[i].innerHTML = date;
  date++;
}

// 달력 caption영역의 연도와 월 표시 부분입니다. 월(month)은 +1을 해야 올바르게 표시 됨 
// caption 연도 월 표시 

caption_year.innerHTML = year;
caption_month.innerHTML = month + 1;