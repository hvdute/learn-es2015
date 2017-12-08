function testSpread(name, age, ...likes) {
  console.log(name);
  console.log(age);
  console.log(likes);
}

testSpread('Dung', 15, 'Hello', 'Hi', 'Bonjour');
// 'Dung'
// 15
// ["Hello", "Hi", "Bonjour"]

function testSpread2(name, age, email) {
  console.log(`Name: ${name} Age: ${age} Email: ${email}`);
}
const spreadArgs = ['Dung', 16, 'dunghv@dgroup.co'];
testSpread2(...spreadArgs);
// Name: Dung Age: 16 Email: dunghv@dgroup.co