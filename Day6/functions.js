function sayHello() {
  return "Hello World";
}

let response = sayHello();
console.log(response);

const multiply = (num1, num2) => {
  return num1 + num2;
};

let result = multiply(5, 97639);
console.log("The result is:", result);

(function () {
  console.log("Self invoke");
})(); ///kendi kendini çağıran fonksiyon

const restOf = (...numbers) => {
  ///bana gelecek olan eleman sayısını bilmiyorsam
  let result = 0;
  numbers.map((number) => {
    result = result + number;
  });
  return result;
};

let restOfMultiplied = restOf(1, 2, 45, 66, 78, 3, 2);
console.log("Multiplied Data", restOfMultiplied);
