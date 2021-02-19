
var liczba = 60;
function zegar(){
    document.getElementById("wynik").innerHTML = liczba;
    liczba = liczba -1;
    if(liczba <0 )liczba = 60;
    setTimeout("zegar()",1000);
}





function wyswietl1(){
    document.getElementById("okno1").innerHTML = "<div id='flipon'><button onclick='wyswietlobraz()'>Wyświetl</button><div>";
}
function wyswietlobraz(){
    document.getElementById("okno2").innerHTML = "<div id='flip'>WyświetlObrazki</div><img src='zdj1.jpg' id='panel1'><img src='zdj2.jpg' id='panel2'><img src='zdj3.jpg' id='panel3'><img src='zdj4.jpg' id='panel4'>";
}


$(document).ready(function(){
$("#flip").click(function(){
$("#panel1").slideToggle("slow");
$("#panel2").slideToggle("slow");
$("#panel3").slideToggle("slow");
$("#panel4").slideToggle("slow");
});
});

function wyswietlobliczenia(){
    document.getElementById("okno1").innerHTML = "<input type='number' name='a' placeholder='a' ><br><input type='number' name='b' placeholder='b'<br><br><input type='number' name='c' placeholder='c'<br><button onclick='obliczenia()'>Oblicz</button>";
}
function obliczenia(){
    wynik ="";
    var a = document.getElementByClassName("a").value;
    var b = document.getElementByClassName("b").value;
    var c = document.getElementByClassName("c").value;
    wynik = wynik + Math.pow(a, b) - c;
    document.getElementById("okno2").innerHTML = wynik;




}
