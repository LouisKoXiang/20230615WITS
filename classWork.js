// 定義 Animal 原型物件
var Animal = {
  eat: function() {
    console.log("Animal is eating.");
  },
  cry: function() {
    console.log("Animal is crying.");
  }
};

var Dog = Object.create(Animal);
// 品種
Dog.breed = 1;
Dog.bark = function() {
  console.log("讓他吠");
};
// 建立 Cat 子類別
var Cat = Object.create(Animal);
// 顏色
Cat.color = "橘貓";
Cat.meow = function() {
  console.log("讓他喵");
};
// 測試 Dog 實例
var myDog = Object.create(Dog);
myDog.name = "小黑柴";
myDog.age = 3;
console.log("Dog name:", myDog.name);
console.log("Dog age:", myDog.age);
myDog.eat();
myDog.bark();

// 測試 Cat 實例
var myCat = Object.create(Cat);
myCat.name = "加菲貓";
myCat.age = 5;
console.log("Cat name:", myCat.name);
console.log("Cat age:", myCat.age);
myCat.eat();
myCat.meow();