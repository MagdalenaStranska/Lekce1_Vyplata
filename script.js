let hodiny = 7
let pracovniDny = 21
let hodinovaMzda = 320
let pausal = 0.4
let dan = 0.15

document.body.innerHTML += "<p>" + (hodiny * pracovniDny * hodinovaMzda) + "</p>"

document.body.innerHTML += "<p>" + (Math.floor(((hodiny * pracovniDny * hodinovaMzda) * pausal) * dan)) + "</p>"







