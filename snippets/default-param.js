function sayHi(name = 'Dung Hoang', age = 14) {
  console.log(`Hi, I'm ${name}. I'm ${age} years old.`);
}

sayHi('Dung', 15);
// Hi, I'm Dung. I'm 15 years old.
sayHi('Dungh');
// Hi, I'm Dungh. I'm 14 years old.
sayHi();
// Hi, I'm Dung Hoang. I'm 14 years old.