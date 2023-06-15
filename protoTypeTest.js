var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var john = {
  firstName: "John",
  lastName: "Doe",
};

// 實作上 使用此技巧時 務必 謹慎！ 能不用 就不用
console.log('hi')
john.__proto__ = person
// console.log(john.getFullName())
// var benson = {
//   firstName: 'benson'
// }
// benson.__proto__ = person
// console.log(benson.getFullName())
console.log(john)


