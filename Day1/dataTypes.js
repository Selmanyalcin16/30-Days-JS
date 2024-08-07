//string değişken oluşturup harflerini ekrana basma
let word = "Javascript";
console.log(word[0], word[1], word[2]);

//farklı integer değişkenler oluşturup bunların eşitlik durumlarını kontrol etme
let numOne = 3;
let numTwO = 2;
let numThree = 3;
console.log(numOne == numTwO);
console.log(numOne == numThree);

//arrayler

let myArray = [1, 2, 3, 4, 5, 6];
myArray[1] = "Selman"; //Arrayin herhangi bir elemanını değiştirmek bu kadar kolay
console.log(myArray[1]);

let myObject = {
  name: "Selman",
  surname: "Yalçın",
  age: 18,
};

/*Buraya yazacaklarım biraz uzun bir dipnot olacak buraya gelene kadar hem Primitive(ilkel) hem de non-Primitive yani ilkel olmayan veri tipleri ile çalıştık
Primitive veri tipleri:strings,booleans,integers,floats,
non-Primitive veri tipleri:arrays,functions,objects */

let array1 = [1, 2, 4, 5];
let array2 = [1, 2, 4, 5];
let array3 = array1;

console.log(array1 == array2, array1 == array3);

/*Kodun 32.satırında bulunan console.log çıktısını incelediğimiz zaman array1 ve array2nin aynı olsa da birbirine eşit olmadığını gözlemliyoruz.
Bu non-Primitive değişkenlerin doğasından kaynaklı bir durum ancak array3 ve array1'in birbirine eşit olduğunu görüyoruz bunun sebebi 
array3'ün array1'i referans alması*/

//!!!!!!!!    Bölüm 2:JS ve Numbers    !!!!!!!!!

///Burda basitçe bir integer ve float değişken oluşturduk
let myNum = 10;
let gravity = 9.81;

///JS'te aynı zamanda aklımıza gelen her türlü matematiksel işlemi yapmamıza yardımcı olan Math objeleri de oluşturabiliriz

const pi = Math.PI;
console.log(pi, Math.round(pi));
console.log(Math.max(1, 2, 34, 5));
const randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

//Math sayesinde karekök mutlak değer trigonometri logaritma üs alma vs pek çok diğer işlem de istenildiği takdirde gerçekleştirilebilir

//!!!!!!!!    Bölüm 3:JS ve Strings    !!!!!!!!!

const name = "Selman";
const surname = "Yalçın";
console.log(name + surname); //iki stringi birleştirmek işte bu kadar kolay

//Template String
//NOT:Backstick için önce ALT Gr sonra iki kere virgül tuşuna bas

let myTemplateString = `${name}  ${surname}`; ///JS'teki en modern string oluşturma yöntemi
console.log(myTemplateString);
let newString = "Selam";
let newString2 = "Selman Yalçın";
let countries = "Turkey,USA,Germany";
console.log(newString, newString.length, newString[newString.length - 1]); //String ve uzunluğunu yazdırma son elemanı alma
console.log(newString.toUpperCase(), newString.toLowerCase()); //büyük ve küçük harfe çevirme
console.log(word.substring(4, 2)); //String parçalama substring ile yapılır nerden başlanacağı ve kaç karakter alınacağı
console.log(newString2.split(" ")); //split sayesinde stringleri parçalayıp onları arraylere dönüştürmek mümkün
console.log(countries.split(","));
console.log(countries.split()); //parçalamadan da arraye dönüştürülebilir
console.log(countries.includes("Canada")); //Stringin belirtilen ifadeyi içerip içermemesine göre true veya false döndürür
console.log(countries.replace("USA", "Canada")); //Stringin içindeki belirli bir ifadeyi istenen ifadeye çevirme
console.log(countries.indexOf("Turkey")); //İstenen ifadenin string içinde kaçıncı indexte başladığını döndürür

//!!!!!!!!    Bölüm 4:Değişken Değiştirme    !!!!!!!!!

let stringNum1 = "9";
let stringFloat = "9.81";
console.log(typeof parseInt(stringNum1), typeof parseFloat(stringFloat));
