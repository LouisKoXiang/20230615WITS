var person = {
    firstName: "Default",
    lastName: "Default",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  
  var john = Object.create(person)
  john.firstName = 'Louis'
  john.lastName = 'ko'
  john.call = function() {
    console.log('撥號中')
  };
  
  var temp = Object.create(person)
  temp.firstName = 'Benson'
  temp.lastName = 'lin'
  
  var johnJohn =  Object.create(john)
  
  
  
  console.log(john.getFullName())
  console.log(temp.getFullName())
  john.call();
  
  
  console.log(johnJohn)
  johnJohn.call();