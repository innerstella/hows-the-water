//default
let place = document.getElementById("place").value;
sessionStorage.setItem("default", loca);

//값 변화
function changeVal() {
  sessionStorage.clear();
  let place = document.getElementById("place").value;
  sessionStorage.setItem("place", place);
  console.log(place);

  if (place === "xx") {
    alert("지역을 선택해주세요");
  }

  let fileName = "";
  if (place === "인천광역시") {
    fileName = "../data_gw/Incheon.json";
  } else if (place === "경기도 가평군") {
    fileName = "../data_gw/Gapyeong.json";
  } else if (place === "경기도 포천시") {
    fileName = "../data_gw/Pocheon.json";
  } else if (place === "경기도 안성시") {
    fileName = "../data_gw/Anseong.json";
  } else if (place === "강원도 영월군") {
    fileName = "../data_gw/Yeongwol.json";
  } else if (place === "강원도 원주시") {
    fileName = "../data_gw/Wonju.json";
  } else if (place === "강원도 태백시") {
    fileName = "../data_gw/Taebaek.json";
  } else if (place === "강원도 삼척시") {
    fileName = "../data_gw/Samcheok.json";
  } else if (place === "충청북도 괴산군") {
    fileName = "../data_gw/Goesan.json";
  } else if (place === "충청북도 청주시") {
    fileName = "../data_gw/Cheongju.json";
  } else if (place === "충청북도 단양군") {
    fileName = "../data_gw/Danyang.json";
  } else if (place === "충청북도 진천군") {
    fileName = "../data_gw/Jincheon.json";
  } else if (place === "충청북도 보은군") {
    fileName = "../data_gw/Boeun.json";
  } else if (place === "충청남도 당진시") {
    fileName = "../data_gw/Dangjin.json";
  } else if (place === "전라남도 화순군") {
    fileName = "../data_gw/Hwasun.json";
  } else if (place === "경상북도 성주군") {
    fileName = "../data_gw/Seongju.json";
  } else if (place === "경상북도 울릉군") {
    fileName = "../data_gw/Ulleung.json";
  } else if (place === "경상북도 울진군") {
    fileName = "../data_gw/Uljin.json";
  } else if (place === "경상남도 의령군") {
    fileName = "../data_gw/Uiryeong.json";
  } else if (place === "제주특별자치도") {
    fileName = "../data_gw/Jeju.json";
  }

  console.log(fileName);

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
    //ratio
    let arsenic = arr[0].arsenic;
    let nitrate_nitrogen = arr[0].nitrate_nitrogen;
    let tetrachloroethene = arr[0].tetrachloroethene;
    let trichloroethene = arr[0].trichloroethene;
    let cadmium = arr[0].cadmium;
    let mercury = arr[0].mercury;

    //value
    let v_arsenic = arr[1].arsenic;
    let v_nitrate_nitrogen = arr[1].nitrate_nitrogen;
    let v_tetrachloroethene = arr[1].tetrachloroethene;
    let v_trichloroethene = arr[1].trichloroethene;
    let v_cadmium = arr[1].cadmium;
    let v_mercury = arr[1].mercury;

    //json object 값 변수에 저장
    //ratio
    sessionStorage.setItem("arsenic", arsenic);
    sessionStorage.setItem("nitrate_nitrogen", nitrate_nitrogen);
    sessionStorage.setItem("tetrachloroethene", tetrachloroethene);
    sessionStorage.setItem("trichloroethene", trichloroethene);
    sessionStorage.setItem("cadmium", cadmium);
    sessionStorage.setItem("mercury", mercury);
    //value
    sessionStorage.setItem("v_arsenic", v_arsenic);
    sessionStorage.setItem("v_nitrate_nitrogen", v_nitrate_nitrogen);
    sessionStorage.setItem("v_tetrachloroethene", v_tetrachloroethene);
    sessionStorage.setItem("v_trichloroethene", v_trichloroethene);
    sessionStorage.setItem("v_cadmium", v_cadmium);
    sessionStorage.setItem("v_mercury", v_mercury);

    console.log("완료");
  }
}
