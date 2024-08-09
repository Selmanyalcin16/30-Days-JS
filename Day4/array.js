let myArray = ["a", "b", "c", "d"];
myArray[1] = "selman";
let itCompanies = [
  "Facebook",
  "Google",
  "Amazon",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
];
let emptyArray = Array(8).fill("selman"); ///belli bir eleman sayısına sahip boş bir array oluşturma
console.log(emptyArray.length);
console.log(myArray.indexOf("c")); ///arrayde spesifik bir elemanın indeksini bulma
console.log(myArray.lastIndexOf("c")); ///bir dizide bulunan elemanın en son kaçıncı indekste olduğunu bulma
console.log(myArray.toString()); ///arrayi string yapar
myArray.splice(0, 4, 1, 2, 3, 4, 7, 8, 9, 0, 0); ///arrayden belirli bir indeks aralığını silme ve karakter ekleme
console.log(myArray);
myArray.splice(0, myArray.length);
myArray.push("selman", "yalçın", "emir", "yalçın", "yalçın");
console.log(myArray);
myArray.pop(); ///sondan eleman çıkarmak için kullanılır
myArray.shift(); ///baştan eleman çıkarmak için kullanılır
myArray.unshift("selocan"); ///başa eleman eklemek için kullanılır
myArray.push("selocan"); ///push ile sona zaten eleman eklenebiliyordu
myArray.sort(); ///arrayi alfabetik olarak düzenlemeye yarar
console.log(myArray);

console.log(itCompanies.splice(2, 4));
