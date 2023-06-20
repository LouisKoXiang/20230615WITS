var Animal ={
    cry: function(){
        console.log('爸爸在哭')
        return '爸爸不哭了'
    },
    eat: function(){
        console.log('爸爸在吃')
        return '爸爸不吃了'
    },
};

const dog = Object.create(Animal)
dog.breed= '品種'

dog.bark= function(){
    console.log('barking')
    return 'bark done'
}

const cat = Object.create(Animal)
cat.color= '顏色'

cat.meow= function(){
    console.log('meow meow meow')
    return 'meow done'
}

const myDog = Object.create(dog)
console.log(myDog.bark())

const myCat = Object.create(cat)
myCat.color= '白色'
console.log("myCat 顏色:" +myCat.color  + "," + myCat.cry() + "," + myCat.eat() + ',' + myCat.meow())
