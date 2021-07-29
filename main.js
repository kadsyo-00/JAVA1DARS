var user__age = +prompt("Iltimos Yoshingizni Kiriting")
if (user__age <= 18) {
    console.log("Yoshsiz o`qishingiz kerak")
} else if (user__age <= 50){
    console.log('Ishlashingiz kerak')
}else if (user__age <= 59){
    console.log('Yaqinda Pensiyaga chaqasiz')
}else if (user__age <= 150){
    console.log('Pensionerga o`xshaysiz, hali tirik ekaningizdan hursandmiz :)')
} else{
    alert("Nimanidir noto`g`ri yozdingiz")
}

var user__name = prompt("Iltimos Ismingizni kiriting")
var boss = 'Mustafo'
if (boss == user__name) {
    alert("Hello Boss")
} else{
    alert('Hello Guest')
}


var son1 = +prompt('Hohishiy Son Kiriting')
var son2 = +prompt('Hohishiy Son Kiriting')
var son3 = +prompt('Hohishiy Son Kiriting')


if((son1>son2 && son1<son3) || (son1<son2 && son1>son3)) {
    alert("O`rtacha qiymat " + son1)
} else if((son2>son1 && son2<son3) || (son2<son1 && son2>son3)){
    alert("O`rtacha qiymat " + son2)
} else if ((son3>son2 && son3<son1) || (son3<son2 && son3>son1)){
    alert("O`rtacha qiymat " + son3)
}