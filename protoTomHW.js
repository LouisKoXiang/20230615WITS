var animal = {
    animalName: "Default",
    eat: function () {
        console.log(this.animalName+'吃飯')
    },
    roar: function () {
        console.log('聽'+this.animalName+'叫')
    }
};

const lion = Object.create(animal)
lion .animalName = "Lion"
lion .maneColor ="Default"
lion.eat = function () {
    console.log(this.animalName+'吃肉')
    return true;
};
lion.roar = function () {
    console.log(this.animalName+'吼吼吼')
    return true;
};

lion.move = function () {
    console.log(this.animalName+'奔跑')
    return true;
}

const simba = Object.create(lion)
simba.animalName= "Simba",
simba.maneColor ="Brown"
console.log('辛巴','膚色'+simba.maneColor)
simba.eat();
simba.roar();
simba.move();



const elephant = Object.create(animal)
elephant.animalName = "Elephant"
elephant.color ="Default"
elephant.tuskLength ="Default"
elephant.eat = function () {
    console.log(this.animalName+'吃草')
    return true;
};
elephant.roar = function () {
    console.log(this.animalName+'巴阿阿')
    return true;
};

elephant.move = function () {
    console.log(this.animalName+'慢慢行走')
    return true;
}

const AsianElephant = Object.create(elephant)
AsianElephant.animalName= "AsianElephant",
AsianElephant.color ="Gray"
AsianElephant.tuskLength ="short"
console.log('亞洲象','顏色'+AsianElephant.color,'象牙長'+AsianElephant.tuskLength )
AsianElephant.eat();
AsianElephant.roar();
AsianElephant.move();