// 160 je predvyplnena hodnota, default
const hodinovka = 300;
const pocetHodin = Number(prompt("zadej pocet hodin zamestnance", "160"));
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000", string
const plat = ((hodinovka * pocetHodin) + premie);

document.body.innerHTML = "<p> Pepa Novak si vydelal plat:" + plat + "Kc</p>";
