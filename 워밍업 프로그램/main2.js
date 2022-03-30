

var num = prompt("구구단을 입력해주세요");

alert(num)

//유효성 검사
//비정상케이스
if(num == "" || isNaN(num)) {

    alert("잘못된 단 입니다.")

}else if(num < 1 || 10 < num) {
    alert( "구구단은 1~9단까지만 입력가능합니다.")
}
//정상케이스
else  {
    for(var i=1; i < 10; i++) {
        console.log( num +" " + i +" = " + (num *i))
    }
}