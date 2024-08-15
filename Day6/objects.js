ad = "selman"; //pythondaki gibi de tanımlanabilir
console.log(ad);

const user = {
  name: "selman",
  surname: "yalçın",
  schools: ["Tan", "Bursa Fen", "ITU"],
  family: {
    dad: "Kamil",
    mom: "Betül",
  },
};

user.name = "Emir";
user.schools.push("Caltech?");
user.skill = ["JS", "Python", "React"];
user.family.brother = "Emir";

console.log(user.schools);
console.log(user.name);
console.log(user.family);

let newUser = Object.assign({}, user); //objeyi kopyalayıp yeni bir dğeişkene onu atama
console.log("My New Object", newUser);
console.log(Object.keys(newUser)); //bir objenin içindeki parametleri görme
console.log(Object.values(newUser)); ///bir objenin içindeki değerleri alma
console.log(Object.entries(newUser)); ///direk objeyi çeker
