//선택한 지역 명 출력
let loc = sessionStorage.getItem("location");
document.getElementById("loc").innerText = loc + "의 수돗물";

//json 값 가져오기
//ratio
let general_bacteria = sessionStorage.getItem("general_bacteria");
let residual_chlorine = sessionStorage.getItem("residual_chlorine");
let evaporation_residue = sessionStorage.getItem("evaporation_residue");
let cl = sessionStorage.getItem("cl");
let s = sessionStorage.getItem("s");
let nitrate_nitrogen = sessionStorage.getItem("nitrate_nitrogen");
let fe = sessionStorage.getItem("fe");
let mn = sessionStorage.getItem("mn");
let f = sessionStorage.getItem("f");
let cu = sessionStorage.getItem("cu");
let zn = sessionStorage.getItem("zn");
let ammonium_nitrogen = sessionStorage.getItem("ammonium_nitrogen");

document.querySelector("#general_bacteria").innerText =
  general_bacteria + " 점";
document.querySelector("#residual_chlorine").innerText =
  residual_chlorine + " 점";
document.querySelector("#evaporation_residue").innerText =
  evaporation_residue + " 점";
document.querySelector("#cl").innerText = cl + " 점";
document.querySelector("#s").innerText = s + " 점";
document.querySelector("#nitrate_nitrogen").innerText =
  nitrate_nitrogen + " 점";
document.querySelector("#fe").innerText = fe + " 점";
document.querySelector("#mn").innerText = mn + " 점";
document.querySelector("#f").innerText = f + " 점";
document.querySelector("#cu").innerText = cu + " 점";
document.querySelector("#zn").innerText = zn + " 점";
document.querySelector("#ammonium_nitrogen").innerText =
  ammonium_nitrogen + " 점";

//value
let v_general_bacteria = sessionStorage.getItem("v_general_bacteria");
let v_residual_chlorine = sessionStorage.getItem("v_residual_chlorine");
let v_evaporation_residue = sessionStorage.getItem("v_evaporation_residue");
let v_cl = sessionStorage.getItem("v_cl");
let v_s = sessionStorage.getItem("v_s");
let v_nitrate_nitrogen = sessionStorage.getItem("v_nitrate_nitrogen");
let v_fe = sessionStorage.getItem("v_fe");
let v_mn = sessionStorage.getItem("v_mn");
let v_f = sessionStorage.getItem("v_f");
let v_cu = sessionStorage.getItem("v_cu");
let v_zn = sessionStorage.getItem("v_zn");
let v_ammonium_nitrogen = sessionStorage.getItem("v_ammonium_nitrogen");

document.querySelector(".general_bacteria").innerText =
  v_general_bacteria + " (100CFU/mL)";
document.querySelector(".residual_chlorine").innerText =
  v_residual_chlorine + " (4mg/L)";
document.querySelector(".evaporation_residue").innerText =
  v_evaporation_residue + " (500mg/L)";
document.querySelector(".cl").innerText = v_cl + " (250mg/L)";
document.querySelector(".s").innerText = v_s + " (200mg/L)";
document.querySelector(".nitrate_nitrogen").innerText =
  v_nitrate_nitrogen + " (10mg/L)";
document.querySelector(".fe").innerText = v_fe + " (0.3mg/L)";
document.querySelector(".mn").innerText = v_mn + " (0.05mg/L)";
document.querySelector(".f").innerText = v_f + " (1.5mg/L)";
document.querySelector(".cu").innerText = v_cu + " (1mg/L)";
document.querySelector(".zn").innerText = v_zn + " (3mg/L)";
document.querySelector(".ammonium_nitrogen").innerText =
  v_ammonium_nitrogen + " (10mg/L)";

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

let defaultLoc = sessionStorage.getItem("default");
if (defaultLoc === "xx") {
  alert("지역을 선택하세요");
  window.history.back();
}
