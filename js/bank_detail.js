//가뭄지수 불러오기
let droughtIndex = sessionStorage.getItem("droughtIndex");
document.getElementById("droughtIndex").innerText =
  "입력한 가뭄지수(SPI6) : " + droughtIndex;
console.log(droughtIndex);

//수위
let height = sessionStorage.getItem("height");
document.getElementById("height").innerText =
  "예측된 하천 수위 : " + height + " El.m";
console.log(height);

//저수용량
let bank = sessionStorage.getItem("bank");
document.getElementById("bank").innerText =
  "예측된 저수 용량 : " + bank + " m3";
console.log(bank);
