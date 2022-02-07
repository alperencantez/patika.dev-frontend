let myName = prompt("İsminizi giriniz: ");
//İsminizin ilk harfi büyük yapılır.
document.querySelector("#myName").innerHTML = myName.charAt(0).toUpperCase() + myName.slice(1);

function clock () {
    const today = new Date();
    let day = today.getDay();
    let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + dayName.innerHTML;
    if (day == 1) { dayName.innerHTML = "Pazartesi"; }
    day == 2 ? dayName.innerHTML = "Salı":
    day == 3 ? dayName.innerHTML = "Çarşamba" :
    day == 4 ? dayName.innerHTML = "Perşembe" :
    day == 5 ? dayName.innerHTML = "Cuma" :
    day == 6 ? dayName.innerHTML = "Cumartesi" :
    day == 7 ? dayName.innerHTML = "Pazar" :

    document.querySelector("#myClock").innerHTML = date;
    setInterval(clock, 1000);
}
clock();
