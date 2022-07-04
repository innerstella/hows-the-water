//선택한 지역 명 출력
let loc = sessionStorage.getItem('location');
document.getElementById('loc').innerText = loc +"의 수돗물";

//json 불러오기
var xmlhttp = new XMLHttpRequest();
var url = "dummy.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myfunc(xmlhttp.responseText);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myfunc(resp) {
  var arr = JSON.parse(resp);
  let val_a = arr[0].a;
  let val_b = arr[0].b;
  let val_c = arr[0].c;

  //json object 값 변수에 저장
  sessionStorage.setItem('val_a', val_a);
  sessionStorage.setItem('val_b', val_b);
  sessionStorage.setItem('val_c', val_c);

}

//json 값 가져오기
let val_A = sessionStorage.getItem('val_a');
let val_B = sessionStorage.getItem('val_b');
let val_C = sessionStorage.getItem('val_c');

document.querySelector('#val_a').innerText = val_A;
document.querySelector('#val_b').innerText = val_B;
document.querySelector('#val_c').innerText = val_C;
console.log(val_A);
console.log(val_B);
console.log(val_C);

val_A = parseInt(val_A);
let a = val_A + 'px';
document.querySelector('.factor1').style.setProperty('--borderA', a);

val_A = parseInt(val_B);
let b = val_B + 'px';
document.querySelector('.factor2').style.setProperty('--borderB', b);

val_A = parseInt(val_C);
let c = val_C + 'px';
document.querySelector('.factor3').style.setProperty('--borderC', c);