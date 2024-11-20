//Exercice 1 :
let Nombers = ["1", "2", "3", "4", "5"];
console.log("les Nombres :", Nombers);
//Exercice 2 :
let fruits = ["apple", "banana", "cherry"];
//Affichage le 2eme element :
console.log("le deuxiéme element du tableau est :", fruits[1]);
// Exercice 3 :
//Modifier un element d'un tableau:
let nbr = [10, 20, 30, 40];
console.log("les nombres est :", nbr);
//Modificaton :
nbr[3] = 50;
console.log("le nouveau table", nbr);
//Exercice 4 :
//Ajouter un élémznt à la fin du tableau
let fruits1 = ["mango", "peach", "pear"];
console.log("l'affichage de tableau avant Ajoutez");
for (let i = 0; i < fruits1.length; i++) {
  console.log("fruit " + i + ": " + fruits1[i]);
}
console.log("l'affichage de tableau apres Ajoutez");
//pour Ajoutez un élement :
fruits1.push("banana");
for (let i = 0; i < fruits1.length; i++) {
  console.log("fruit " + i + ": " + fruits1[i]);
}
// Exercice 5 :
//Supprimer le dernier élément du tableau
let animals = ["dog", "cat", "bird"];
console.log("la Supprition de le dernier élément :");
console.log("le tableau avant la supprition :");
console.log(animals);
// Methode de Supprition :
animals.pop();
console.log("le tableau apres la supprition :");
console.log(animals);
// Exercice 6 :
//les objet
//création un objet simple
let personne = { nom: "Meryem", age: 25 };
console.log(
  "votre nom est :" + personne.nom + "\nVotre age est : " + personne.age
);
