//default 강남구
sessionStorage.setItem('location', '강남구');

function changeVal(){
    let locationSeoul = document.getElementById('seoul').value;
    sessionStorage.setItem('location', locationSeoul);
}

