var person = {
  firstName: "Default",
  lastName: "Default",
  call: function () {


    console.log("撥號中" + this.firstName + this.lastName);
  },
};

const temp = Object.create(person);

temp.firstName = "louis";
temp.lastName = "Ko";

const temp1 = Object.create(person);
temp1.cry = function () {
  console.log("讓他哭");
  return 'N';
};
temp1.breed = '柴犬'

const master = Object.create(temp1);
// console.log("master 讓小弟哭", master.cry());
// console.log(master)

const result = master.cry();
// console.log('結果', result)


const reset = () => {
  window.alert('重置')
  return 'Y'
}
let abc = '1'
const success = () => {
  let abc = '2'
  console.log(abc)
}
success();

console.log("abc", abc);

