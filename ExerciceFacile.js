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
// Exercice 7==>Accéder aux propriétés d'un objet
console.log("L'accès aux propriétés d'un objet");
let person = { nomPer: "John", agePer: 25 };
console.log("Nom:", person["nomPer"]);
console.log("Age:", person["agePer"]);
// Exercice 8 ==>Modifier une propriété d'un objet
let book = { title: "JavaScript 101", author: "Jhon Doe" };
console.log(
  "avant la Modification :\n" +
    "Title : " +
    book.title +
    "\nAuthor :" +
    book.author
);
book.author = "Jane Doa";
console.log(
  "Apres la Modification :\n" +
    "Title : " +
    book.title +
    "\nAuthor :" +
    book.author
);
//Exercice :9==>Ajouter une nouvelle propriété à un objet
let car = { make: "Toyota", model: "Corolla" };
console.log(
  "Avant Ajoutez une nouvelle propriété :\nLa marque est:" +
    car.make +
    "\nLe model est :" +
    car.model
);
//pour Ajoutez une propriété
car.year = 2020;
console.log(
  "Apres Ajoutez une nouvelle propriété :\nLa marque est:" +
    car.make +
    "\nLe model est :" +
    car.model +
    "\nle ans est :" +
    car.year
);
