let num = prompt('구구단 몇 단을 볼까요?', '1~9의 숫자 입력');

// 입력검사 
if(num == '' || isNaN(num)) {
    alert('올바른 값을 입력하세요');
} else if (num < 1 || num > 10) {
    //  구구단 범위를 체크 
    alert('1부터 9까지 입력할 수 있습니다.')
} else {
    // 구구단 계산 
    for(let i = 1; i < 10; i++) {
            document.write(num + ' * ' +  i + ' = ' + num * i + '<br>')
    }
}