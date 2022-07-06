//default 강남구
let loca = document.getElementById("seoul").value;
// let fileName = "../gangnamGu.json";
// sessionStorage.setItem("location", locationSeoul);
sessionStorage.setItem("default", loca);

// console.log(locationSeoul, fileName);

//값 변화
function changeVal() {
  sessionStorage.clear();
  let locationSeoul = document.getElementById("seoul").value;
  sessionStorage.setItem("location", locationSeoul);
  console.log(locationSeoul);

  if (locationSeoul === "xx") {
    alert("지역을 선택해주세요");
  }

  let fileName = "";
  if (locationSeoul === "강남구") {
    fileName = "../kangnamGu.json";
  } else if (locationSeoul === "강동구") {
    fileName = "../gangdongGu.json";
  } else if (locationSeoul === "강북구") {
    fileName = "../kangbookGu.json";
  } else if (locationSeoul === "강서구") {
    fileName = "../kangseoGu.json";
  } else if (locationSeoul === "관악구") {
    fileName = "../kwanakGu.json";
  } else if (locationSeoul === "광진구") {
    fileName = "../gwangjinGu.json";
  } else if (locationSeoul === "구로구") {
    fileName = "../guroGu.json";
  } else if (locationSeoul === "금천구") {
    fileName = "../geumchunGu.json";
  } else if (locationSeoul === "노원구") {
    fileName = "../nowonGu.json";
  } else if (locationSeoul === "도봉구") {
    fileName = "../dobongGu.json";
  } else if (locationSeoul === "동대문구") {
    fileName = "../dongdaemunGu.json";
  } else if (locationSeoul === "동작구") {
    fileName = "../dongjakGu.json";
  } else if (locationSeoul === "마포구") {
    fileName = "../mapoGu.json";
  } else if (locationSeoul === "서대문구") {
    fileName = "../seodaemunGu.json";
  } else if (locationSeoul === "서초구") {
    fileName = "../seochoGu.json";
  } else if (locationSeoul === "성동구") {
    fileName = "../seongdongGu1.json";
  } else if (locationSeoul === "성북구") {
    fileName = "../seongbookGu.json";
  } else if (locationSeoul === "송파구") {
    fileName = "../songpaGu.json";
  } else if (locationSeoul === "양천구") {
    fileName = "../yangchunGu.json";
  } else if (locationSeoul === "영등포구") {
    fileName = "../yeongdeungpoGu.json";
  } else if (locationSeoul === "용산구") {
    fileName = "../yongsanGu.json";
  } else if (locationSeoul === "은평구") {
    fileName = "../eunpyeongGu.json";
  } else if (locationSeoul === "종로구") {
    fileName = "../jongroGu.json";
  } else if (locationSeoul === "중구") {
    fileName = "../joongGu.json";
  } else if (locationSeoul === "중랑구") {
    fileName = "../joongrangGu.json";
  }

  console.log(fileName);
  // sessionStorage.setItem("fileName", fileName);

  const xmlhttp = new XMLHttpRequest();
  const url = fileName;

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

    console.log("완료");
  }
}

// //json 불러오기
// const xmlhttp = new XMLHttpRequest();
// fileName = sessionStorage.getItem("fileName");
// const url = fileName;
// console.log(url);

// xmlhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     myfunc(xmlhttp.responseText);
//   }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myfunc(resp) {
//   var arr = JSON.parse(resp);
//   let val_a = arr[0].general_bacteria;
//   let val_b = arr[0].residual_chlorine;
//   let val_c = arr[0].evaporation_residue;
//   let val_d = arr[0].cl;
//   let val_e = arr[0].s;
//   let val_f = arr[0].nitrate_nitrogen;
//   let val_g = arr[0].fe;
//   let val_h = arr[0].mn;
//   let val_i = arr[0].f;
//   let val_j = arr[0].cu;
//   let val_k = arr[0].zn;
//   let val_l = arr[0].ammonium_nitrogen;

//   //json object 값 변수에 저장
//   sessionStorage.setItem("val_a", val_a);
//   sessionStorage.setItem("val_b", val_b);
//   sessionStorage.setItem("val_c", val_c);
//   sessionStorage.setItem("val_d", val_d);
//   sessionStorage.setItem("val_e", val_e);
//   sessionStorage.setItem("val_f", val_f);
//   sessionStorage.setItem("val_g", val_g);
//   sessionStorage.setItem("val_h", val_h);
//   sessionStorage.setItem("val_i", val_i);
//   sessionStorage.setItem("val_j", val_j);
//   sessionStorage.setItem("val_k", val_k);
//   sessionStorage.setItem("val_l", val_l);

//   console.log("완료");
// }
