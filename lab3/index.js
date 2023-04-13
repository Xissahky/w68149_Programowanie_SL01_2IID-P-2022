function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert("Hello, how are you?")
}
for (let i = 1; i < 100; i++) {
    console.log(i)
}

function kalkulator() {
    a = prompt("podaj pierwszu liczbu: ")
    b = prompt("podaj drugu liczbu: ")
    c = Number(a) + Number(b);
    document.getElementById("zad3").innerHTML = c;
}


function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("clock()", 1000);
}
function game() {
    let x = Math.floor(Math.random() * 101);
    let res = true;
    let licz = 0;
    while (res) {
        a = prompt("Sprawdz: ");
        licz += 1;
        if (Number(a) == x)
            res = false;
        else {
            if (Number(a) < x)
                alert("liczba jest wieksza")
            else
                alert("liczba jest mniejsza")
        }
    }
    document.getElementById("game").innerHTML = "Congratulations, liczba sprob  " + licz;
}