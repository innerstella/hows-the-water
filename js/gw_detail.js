//선택한 지역 명 출력
let place = sessionStorage.getItem("place");
document.getElementById("loc").innerText = place + "의 지하수";

//json 값 가져오기
//ratio
let arsenic = sessionStorage.getItem("arsenic");
let nitrate_nitrogen = sessionStorage.getItem("nitrate_nitrogen");
let tetrachloroethene = sessionStorage.getItem("tetrachloroethene");
let trichloroethene = sessionStorage.getItem("trichloroethene");
let cadmium = sessionStorage.getItem("cadmium");
let mercury = sessionStorage.getItem("mercury");

document.querySelector("#arsenic").innerText = arsenic + " 점";
document.querySelector("#nitrate_nitrogen").innerText =
  nitrate_nitrogen + " 점";
document.querySelector("#tetrachloroethene").innerText =
  tetrachloroethene + " 점";
document.querySelector("#trichloroethene").innerText = trichloroethene + " 점";
document.querySelector("#cadmium").innerText = cadmium + " 점";
document.querySelector("#mercury").innerText = mercury + " 점";

//value
let v_arsenic = sessionStorage.getItem("v_arsenic");
let v_nitrate_nitrogen = sessionStorage.getItem("v_nitrate_nitrogen");
let v_tetrachloroethene = sessionStorage.getItem("v_tetrachloroethene");
let v_trichloroethene = sessionStorage.getItem("v_trichloroethene");
let v_cadmium = sessionStorage.getItem("v_cadmium");
let v_mercury = sessionStorage.getItem("v_mercury");

document.querySelector(".arsenic").innerText = v_arsenic + " (0.05mg/L)";
document.querySelector(".nitrate_nitrogen").innerText =
  v_nitrate_nitrogen + " (20mg/L)";
document.querySelector(".tetrachloroethene").innerText =
  v_tetrachloroethene + " (0.01mg/L)";
document.querySelector(".trichloroethene").innerText =
  v_trichloroethene + " (0.03mg/L)";
document.querySelector(".cadmium").innerText = v_cadmium + " (0.01mg/L)";
document.querySelector(".mercury").innerText = v_mercury + " (불검출)";

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
