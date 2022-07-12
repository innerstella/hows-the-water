function drought() {
  sessionStorage.clear();
  let droughtIndex = document.querySelector("#select").value;
  sessionStorage.setItem("droughtIndex", droughtIndex);
  console.log(droughtIndex);
}
