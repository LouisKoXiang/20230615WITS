var animal = {
    name :"Default",
    eat: function () {
        return this.name+" "+"吃東西";
    }

};


let lion = Object.create(animal)
let elephant = Object.create(animal)
lion.maneColor="golden"
lion.name="lion";
lion.roar=function () {
    return this.name+" "+"Wau~~~" ;
};
console.log(lion.roar());  



elephant.tuskLength="20inch";
elephant.name="elephant";
elephant.roar = function () {
    return this.name+" "+"Paon~~~" ;
};
console.log(elephant.roar());  

 
let simba=Object.create(lion)
simba.name="simba";
console.log(simba.roar());
console.log(simba);
console.log(lion.eat());
console.log(simba.eat());

let linWang=Object.create(elephant)
linWang.name="linWang";
console.log(linWang.roar());
console.log(linWang);
console.log(elephant.eat());
console.log(linWang.eat());