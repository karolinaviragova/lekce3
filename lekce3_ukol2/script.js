/*
1) Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
2) Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.*/

// const workingHoursPerDay = 8;
// const workigDaysPerMonth = 21;

const workingHoursPerDay = Number(prompt("Kolik hodin denne pracujes?"));
const workigDaysPerMonth = Number(prompt("Kolik dni za mesic pracujes?"));
const payPerHours = Number(prompt("Kolik je tva hodinova sazba?"))

document.body.innerHTML = "<p>"+ (workigDaysPerMonth * workingHoursPerDay) * payPerHours + "</p>";
