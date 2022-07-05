//선택한 지역 명 출력
let loc = sessionStorage.getItem("location");
document.getElementById("loc").innerText = loc + "의 수돗물";

//json 불러오기
var xmlhttp = new XMLHttpRequest();
var url = "../dummy.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myfunc(xmlhttp.responseText);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myfunc(resp) {
  var arr = JSON.parse(resp);
  let val_a = arr[0].general_bacteria;
  let val_b = arr[0].residual_chlorine;
  let val_c = arr[0].evaporation_residue;
  let val_d = arr[0].cl;
  let val_e = arr[0].s;
  let val_f = arr[0].nitrate_nitrogen;
  let val_g = arr[0].fe;
  let val_h = arr[0].mn;
  let val_i = arr[0].f;
  let val_j = arr[0].cu;
  let val_k = arr[0].zn;
  let val_l = arr[0].ammonium_nitrogen;

  //json object 값 변수에 저장
  sessionStorage.setItem("val_a", val_a);
  sessionStorage.setItem("val_b", val_b);
  sessionStorage.setItem("val_c", val_c);
  sessionStorage.setItem("val_d", val_d);
  sessionStorage.setItem("val_e", val_e);
  sessionStorage.setItem("val_f", val_f);
  sessionStorage.setItem("val_g", val_g);
  sessionStorage.setItem("val_h", val_h);
  sessionStorage.setItem("val_i", val_i);
  sessionStorage.setItem("val_j", val_j);
  sessionStorage.setItem("val_k", val_k);
  sessionStorage.setItem("val_l", val_l);
}

//json 값 가져오기
let val_A = sessionStorage.getItem("val_a");
let val_B = sessionStorage.getItem("val_b");
let val_C = sessionStorage.getItem("val_c");
let val_D = sessionStorage.getItem("val_d");
let val_E = sessionStorage.getItem("val_e");
let val_F = sessionStorage.getItem("val_f");
let val_G = sessionStorage.getItem("val_g");
let val_H = sessionStorage.getItem("val_h");
let val_I = sessionStorage.getItem("val_i");
let val_J = sessionStorage.getItem("val_j");
let val_K = sessionStorage.getItem("val_k");
let val_L = sessionStorage.getItem("val_l");

document.querySelector("#val_1").innerText = val_A;
document.querySelector("#val_2").innerText = val_B;
document.querySelector("#val_3").innerText = val_C;
document.querySelector("#val_4").innerText = val_D;
document.querySelector("#val_5").innerText = val_E;
document.querySelector("#val_6").innerText = val_F;
document.querySelector("#val_7").innerText = val_G;
document.querySelector("#val_8").innerText = val_H;
document.querySelector("#val_9").innerText = val_I;
document.querySelector("#val_10").innerText = val_J;
document.querySelector("#val_11").innerText = val_K;
document.querySelector("#val_12").innerText = val_L;

// val_A = parseInt(val_A);
// let a = val_A + "px";
// document.querySelector(".factor1").style.setProperty("--borderA", a);

// val_A = parseInt(val_B);
// let b = val_B + "px";
// document.querySelector(".factor2").style.setProperty("--borderB", b);

// val_A = parseInt(val_C);
// let c = val_C + "px";
// document.querySelector(".factor3").style.setProperty("--borderC", c);
