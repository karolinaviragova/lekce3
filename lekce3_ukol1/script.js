/* ukol 1
Ockovani
Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

1) Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
2) Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru: Květoslav Voňavý, věk: 67
*/

const nameOfCustomer = prompt("Jake je vase jmeno?");
const ageOfCustomer = Number(prompt("Jaky je vas vek?"));

document.body.innerHTML = "<p>" + nameOfCustomer + " vek: " + ageOfCustomer + "</p>";
