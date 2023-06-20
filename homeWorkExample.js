// 定義動物原型
var Animal = {
  name: "",
  eat: function () {
    console.log(this.name + " is eating.");
  },
};

// 建立 Lion 子類別
var Lion = Object.create(Animal);
Lion.maneColor = "金毛";
Lion.roar = function () {
  console.log(this.name + " is roaring with a " + this.maneColor + " mane!");
};

// 建立 Elephant 子類別
var Elephant = Object.create(Animal);
Elephant.tuskLength = "300";
Elephant.roar = function () {
  console.log(
    this.name + " is roaring with " + this.tuskLength + " cm long tusks!"
  );
};

// 建立動物實例並測試
var simba = Object.create(Lion);
simba.name = "辛巴";
console.log("Animal name:", simba.name);
simba.eat();
simba.roar();

var dumbo = Object.create(Elephant);
dumbo.name = "林旺";
console.log("Animal name:", dumbo.name);
dumbo.eat();
dumbo.trumpet();
