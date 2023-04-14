///Zadanie 1

let wiek = prompt("Podaj swoj wiek:")
wiek < 18 ? alert("Jestesz jeszcze niepelnoletnim") : alert("Jestesz juz pelnoletnim")
///zadanie 2

let temp = prompt("Podaj temperaturu w stopniach Celsjusza")
console.log(`${temp * 1.8 + 32} w stopniachfahrenheita`)


/// Zadanie 3

let tabl = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let suma = 0
let tablParzyste = []
let maxTab=tabl[0]

for (let i = 0; i < tabl.length; i++) {
    suma += tabl[i]
    if (tabl[i] % 2 == 0)
        tablParzyste.push(tabl[i])
    tabl[i] = tabl[i] * 3
    if (maxTab < tabl[i])
        maxTab=tabl[i]
}
let srednieAryfmetyczne = suma / tabl.length
tabl.push("w68149")
let numerAlbomu = "w68149"
let index=0
for (let i = 0; i < tabl.length; i++) {
    if (tabl[i] == numerAlbomu)
       index=i
}

console.log(suma)
console.log(tablParzyste)
console.log(maxTab)
console.log(srednieAryfmetyczne)
console.log(index)


///Zadanie 4

let tab = [1, 1]
for (let i = 2; i < 100; i++) {
    tab.push(tab[i-1]+tab[i-2])
}
console.log(tab)