function drought() {
  sessionStorage.clear();
  let droughtIndex = document.querySelector("#select").value;
  sessionStorage.setItem("droughtIndex", droughtIndex);
  console.log(droughtIndex);
  func1();
}

let height = 0; //하천수위
let bank = 0; //저수용량

//가뭄지수 -> 하천수위
function func1() {
  //유저가 입력한 가뭄지수 값 받아오기
  let index = sessionStorage.getItem("droughtIndex");
  //가뭄지수-하천수위 계산 (정아한테 받으면 수정 필요!)
  height = index * 128;
  height = Math.round(height);
  //계산된 하천수위 값 저장
  sessionStorage.setItem("height", height);
  //하천수위-저수용량 함수 실행
  func2();
}

//하천수위 -> 청주댐 저수용량
function func2() {
  //func1에서 계산한 수위 값 가져오기
  let height = sessionStorage.getItem("height");
  //하천수위-저수용량 계산
  if (height > 0 && height < 110) {
    bank =
      0.0048137 * height ** 3 -
      0.90976 * height ** 2 +
      59.627 * height -
      1361.57;
  } else if (height > 110 && height < 150) {
    bank =
      0.0040208 * height ** 3 - 0.63563 * height ** 2 + 26.298 * height + 43;
  }
  //계산된 저수용량 값 저장
  bank = Math.round(bank);
  sessionStorage.setItem("bank", bank);
}
