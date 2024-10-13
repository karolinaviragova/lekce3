/*
1) V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
2) Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`
*/

const knihovna = {
  autor: "barbora presidentova",
  nazev: "proc existuje svet",
  pocetStran: 1000,
  pocetKapitol: {
    pocet: 10,
    nejdelsiKapitola: 2,
  },
  sidlo: "Roudnice nad labem"
}

document.body.innerHTML += "<p>" + knihovna.pocetKapitol.nejdelsiKapitola + " " + knihovna.sidlo + "</p>"
