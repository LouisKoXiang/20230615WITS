var Animal={
  name:"Default",  
   eat : function(){
       console.log(this.name,"開吃" )
   },
}

const Lion = Object.create(Animal)
Lion.maneColor="黑色"
Lion.roar=function(){
   console.log(this.name,this.maneColor,"獅子叫")    
}

const Elephant = Object.create(Animal)
Elephant.tuskLength="100公分"
Elephant.roar=function(){
   console.log(this.name,this.tuskLength,"大象叫")   
}

const simba = Object.create(Lion)
simba.name="simba"

const elephanta = Object.create(Elephant)
elephanta.name="我是大象"


console.log(simba.eat())
console.log(simba.roar())
console.log(elephanta.eat()) 
console.log(elephanta.roar()) 