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
// 實作上使用此技巧時 必須！嚴謹！ 但我們必須了解此原理我們才用這種方始學習
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstName);


// var benson = {
//   firstName: 'benson'
// } 

// benson.__proto__ = person;

// console.log(benson.getFullName())