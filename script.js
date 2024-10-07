/* 160 je predvyplnena hodnota, default
const hodinovka = 300;
const pocetHodin = Number(prompt("zadej pocet hodin zamestnance", "160"));
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000", string
const plat = ((hodinovka * pocetHodin) + premie);

document.body.innerHTML = "<p> Pepa Novak si vydelal plat:" + plat + "Kc</p>";
*/

// objekt {}

const nazev = "Kniha 1";
const autor = "Karolina Viragova";
const cena = 100;
const naSklade = true;

// tyhle promenne muzu promenit do objektu
// klic a hodnota
const kniha = {
  nazev: "Kniha 1",
  autor: "Karolina Viragova",
  cena: 100,
  naSklade: true
}

document.body.innerHTML += "<p>Kniha:" + nazev + "</p>";
document.body.innerHTML += "<p>Kniha:" + kniha.nazev + "</p>";
