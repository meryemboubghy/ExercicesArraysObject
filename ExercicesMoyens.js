// Exercice 11
console.log("Boucles Sur les éléments d'un tableau");
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
// Exercice 12==>Filtrer les éléments d'un tableau
let nombers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nbrPairs = nombers.filter((n) => n % 2 === 0);
console.log("Les Nombres Pairs est :" + nbrPairs);
