// Založte si novou prázdnou stránku s JavaScriptovým programem.
// V programu spočítejte svůj měsíční příjem, víte-li, že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
// Měsíční příjem vypište do stránky.
// Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
// Daň také vypište do stránky.


let hodiny = 7
let pracovniDny = 21
let hodinovaMzda = 320
let pausal = 0.6
let dan = 0.15
let prijem = hodiny * hodinovaMzda * pracovniDny
let vypoctenaDan = (prijem - (prijem * pausal)) * dan

document.body.innerHTML += "<p>" + prijem + "</p>"

document.body.innerHTML += "<p>" + (Math.floor(vypoctenaDan)) + "</p>"






