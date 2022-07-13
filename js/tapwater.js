//default
let loca = document.getElementById("seoul").value;
sessionStorage.setItem("default", loca);

//값 변화
function changeVal() {
  sessionStorage.clear();
  let locationSeoul = document.getElementById("seoul").value;
  sessionStorage.setItem("location", locationSeoul);
  console.log(locationSeoul);

  if (locationSeoul === "xx") {
    alert("지역을 선택해주세요");
  }

  let ratio_fileName = "";
  if (locationSeoul === "강남구") {
    ratio_fileName = "../ratio_tapwater/kangnamGu.json";
  } else if (locationSeoul === "강동구") {
    ratio_fileName = "../ratio_tapwater/gangdongGu.json";
  } else if (locationSeoul === "강북구") {
    ratio_fileName = "../ratio_tapwater/kangbookGu.json";
  } else if (locationSeoul === "강서구") {
    ratio_fileName = "../ratio_tapwater/kangseoGu.json";
  } else if (locationSeoul === "관악구") {
    ratio_fileName = "../ratio_tapwater/kwanakGu.json";
  } else if (locationSeoul === "광진구") {
    ratio_fileName = "../ratio_tapwater/gwangjinGu.json";
  } else if (locationSeoul === "구로구") {
    ratio_fileName = "../ratio_tapwater/guroGu.json";
  } else if (locationSeoul === "금천구") {
    ratio_fileName = "../ratio_tapwater/geumchunGu.json";
  } else if (locationSeoul === "노원구") {
    ratio_fileName = "../ratio_tapwater/nowonGu.json";
  } else if (locationSeoul === "도봉구") {
    ratio_fileName = "../ratio_tapwater/dobongGu.json";
  } else if (locationSeoul === "동대문구") {
    ratio_fileName = "../ratio_tapwater/dongdaemunGu.json";
  } else if (locationSeoul === "동작구") {
    ratio_fileName = "../ratio_tapwater/dongjakGu.json";
  } else if (locationSeoul === "마포구") {
    ratio_fileName = "../ratio_tapwater/mapoGu.json";
  } else if (locationSeoul === "서대문구") {
    ratio_fileName = "../ratio_tapwater/seodaemunGu.json";
  } else if (locationSeoul === "서초구") {
    ratio_fileName = "../ratio_tapwater/seochoGu.json";
  } else if (locationSeoul === "성동구") {
    ratio_fileName = "../ratio_tapwater/seongdongGu.json";
  } else if (locationSeoul === "성북구") {
    ratio_fileName = "../ratio_tapwater/seongbookGu.json";
  } else if (locationSeoul === "송파구") {
    ratio_fileName = "../ratio_tapwater/songpaGu.json";
  } else if (locationSeoul === "양천구") {
    ratio_fileName = "../ratio_tapwater/yangchunGu.json";
  } else if (locationSeoul === "영등포구") {
    ratio_fileName = "../ratio_tapwater/yeongdeungpoGu.json";
  } else if (locationSeoul === "용산구") {
    ratio_fileName = "../ratio_tapwater/yongsanGu.json";
  } else if (locationSeoul === "은평구") {
    ratio_fileName = "../ratio_tapwater/eunpyeongGu.json";
  } else if (locationSeoul === "종로구") {
    ratio_fileName = "../ratio_tapwater/jongroGu.json";
  } else if (locationSeoul === "중구") {
    ratio_fileName = "../ratio_tapwater/joongGu.json";
  } else if (locationSeoul === "중랑구") {
    ratio_fileName = "../ratio_tapwater/joongrangGu.json";
  }

  console.log(ratio_fileName);

  const xmlhttp = new XMLHttpRequest();
  const url = ratio_fileName;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myfunc(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function myfunc(resp) {
    var arr = JSON.parse(resp);
    //ratio
    let general_bacteria = arr[0].general_bacteria;
    let residual_chlorine = arr[0].residual_chlorine;
    let evaporation_residue = arr[0].evaporation_residue;
    let cl = arr[0].cl;
    let s = arr[0].s;
    let nitrate_nitrogen = arr[0].nitrate_nitrogen;
    let fe = arr[0].fe;
    let mn = arr[0].mn;
    let f = arr[0].f;
    let cu = arr[0].cu;
    let zn = arr[0].zn;
    let ammonium_nitrogen = arr[0].ammonium_nitrogen;

    //value
    let v_general_bacteria = arr[1].general_bacteria;
    let v_residual_chlorine = arr[1].residual_chlorine;
    let v_evaporation_residue = arr[1].evaporation_residue;
    let v_cl = arr[1].cl;
    let v_s = arr[1].s;
    let v_nitrate_nitrogen = arr[1].nitrate_nitrogen;
    let v_fe = arr[1].fe;
    let v_mn = arr[1].mn;
    let v_f = arr[1].f;
    let v_cu = arr[1].cu;
    let v_zn = arr[1].zn;
    let v_ammonium_nitrogen = arr[1].ammonium_nitrogen;

    //json object 값 변수에 저장
    //ratio
    sessionStorage.setItem("general_bacteria", general_bacteria);
    sessionStorage.setItem("residual_chlorine", residual_chlorine);
    sessionStorage.setItem("evaporation_residue", evaporation_residue);
    sessionStorage.setItem("cl", cl);
    sessionStorage.setItem("s", s);
    sessionStorage.setItem("nitrate_nitrogen", nitrate_nitrogen);
    sessionStorage.setItem("fe", fe);
    sessionStorage.setItem("mn", mn);
    sessionStorage.setItem("f", f);
    sessionStorage.setItem("cu", cu);
    sessionStorage.setItem("zn", zn);
    sessionStorage.setItem("ammonium_nitrogen", ammonium_nitrogen);
    //value
    sessionStorage.setItem("v_general_bacteria", v_general_bacteria);
    sessionStorage.setItem("v_residual_chlorine", v_residual_chlorine);
    sessionStorage.setItem("v_evaporation_residue", v_evaporation_residue);
    sessionStorage.setItem("v_cl", v_cl);
    sessionStorage.setItem("v_s", v_s);
    sessionStorage.setItem("v_nitrate_nitrogen", v_nitrate_nitrogen);
    sessionStorage.setItem("v_fe", v_fe);
    sessionStorage.setItem("v_mn", v_mn);
    sessionStorage.setItem("v_f", v_f);
    sessionStorage.setItem("v_cu", v_cu);
    sessionStorage.setItem("v_zn", v_zn);
    sessionStorage.setItem("v_ammonium_nitrogen", v_ammonium_nitrogen);

    console.log("완료");
  }
}
