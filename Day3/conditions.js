let num = 7;

if (num == 3) {
  console.log("Numara 3'e eşit.");
} else if (num == 4) {
  console.log("Numara 4'e eşit.");
} else {
  console.log("Numara 3'e veya 4'e eşit değil.");
}

///else if yapısının farklı bir formu switch case yapısı

switch (num) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("Bunların hiçbirine eşit değil.");
}

num == 3
  ? console.log("numara 3'e eşit")
  : console.log("numara 3'e eşit değil");
