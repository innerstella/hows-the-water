//선택한 지역 명 출력
let loc = sessionStorage.getItem("location");
document.getElementById("loc").innerText = loc + "의 수돗물";

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

let fileName = sessionStorage.getItem("fileName");
console.log(fileName);

//세션 비우기
function reLoad() {
  console.log("지움");
  sessionStorage.clear();
}

//지역 선택 안 했으면 뒤로 돌려보내기
if (loc === "xx") {
  alert("지역을 선택하세요");
  window.history.back();
}
