/* Realitka
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

1) Pomocí tečkové notace vypište do stránky dispozici bytu.
2) Vypište do stránky čistý nájem bez poplatků.
3) Vypište do stránky celý objekt představující výměru bytu.
4 )Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
5) Změnte stav inzerátu z 'free' na 'taken'.
*/

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

const adresa = apartment.city;
const castPrahy = apartment.district;
apartment.status = "taken";

document.body.innerHTML += "<p>" + "dispozice bytu je " + apartment.disposition + "</p>";
document.body.innerHTML += "<p>" + "cisty najem bez poplatku je " + apartment.price.rent + "</p>";
document.body.innerHTML += "<p>" + "vymera bytu " + apartment.area.floorage + " " + apartment.area.units + " pocet balkonu " + apartment.area.balcony + "</p>";
document.body.innerHTML += "<p>" + adresa + " " + castPrahy + "</p>";
document.body.innerHTML += "<p>" + apartment.status+ "</p>";
