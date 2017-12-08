let contacts = new Map();
contacts.set('Dung Hoang', '09689000000');
contacts.set('Huyen Nguyen', '09689000000');
contacts.set('Bich Phuon', '09689000000');
contacts.set('Taylor Swift', '09689000000');
contacts.set('Lionel Ritchie', '09689000000');

for (let contact of contacts) {
  console.log(contact);
}
// and we got this....
// and its the same with any Iterator object.
// [ 'Dung Hoang', '09689000000' ]
// [ 'Huyen Nguyen', '09689000000' ]
// [ 'Bich Phuon', '09689000000' ]
// [ 'Taylor Swift', '09689000000' ]
// [ 'Lionel Ritchie', '09689000000' ]
