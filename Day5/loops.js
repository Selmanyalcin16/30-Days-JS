let i = 0;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (i < 10) {
  console.log(i);
  i++;
  if (i == 5) {
    continue;
  }
}
