  //1. 사용자가 요구한 단수를 계산 
  var num = prompt('구구단 몇 단을 볼까요?', '1~9의 숫자 입력');
  // 입력 검사 
  //비정상케이스
  if( num == '' || isNaN(num)){
      alert('올바른 값을 입력하세요.');
  } else if (num < 1 || num > 10) {
      // 구구단 범위를 체크 
      alert('1부터 9까지 입력할 수 있습니다.')
  
   //정상케이스
  } else {
      // 구구단 계산 f
  for(i = 1; i < 10; i++) {
      // 2 x 1  = 2
      console.log(num + " * " + i + " =" + (num * i));
  }
  }

  // 5.1.3 연습문제 
  // 문제1: prompt문으로 숫자를 2개 입력받아 더한 결과를 출력하세요 

  const num2 = Number(prompt('첫번째 숫자를 입력하세요'))
  const num3 = Number(prompt('두번째 숫자를 입력하세요'))


  // document.write(num2 + num3)

  // 5.2.1 작업 목록 애플리케이션
