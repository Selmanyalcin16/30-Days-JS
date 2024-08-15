const square = (n) => {
  return n ** 2;
};

const cube = (square, n) => {
  return square(n) * n;
};

let result = cube(square, 5);
console.log(result);

const sayHello = () => {
  console.log("Hello World!");
};

const sayMorning = () => {
  console.log("Good Morning");
};

const helloInterval = setInterval(sayHello, 1000); ////Her 1 saniyede bir ekrana hello world yazdırıyor
setTimeout(sayMorning, 2000); ///Kod çalıştıktan 2 saniye sonra ekrana good morning yazar

setTimeout(() => {
  clearInterval(helloInterval);
}, 5000);

let numbers = [8, 89, 3, 6, 7, 2, 1];

console.log(numbers.filter((number) => number > 4 && number < 80)); //bir arrayin elemanlarını filtreleyip ona göre
console.log(numbers.find((number) => number == 89));
console.log(numbers.findIndex((number) => number == 89)); ///belirli bir elemanın indexini bulur
