const Person = function(name, age) {
    this.name = name;
    this.age = age;
    const that = this;
    (function increaseAge(){
        that.age++
        setTimeout(increaseAge, 1000)
    })();
    // setInterval(()=>{
    //     that.age++;
    // }, 1000);

};
let personsArray = [];
//   for random names
const names = ["AARON", "ABRAM", "BERT", "BRADLY","CYNTHIA","DARLENE"];

const instanceExample1 = new Person("Bob", 36);
const instanceExample2 = new Person("John", 12);
const instanceExample3 = new Person("Lily", 42);
const instanceExample4 = new Person("Ann", 78);

personsArray.push(instanceExample1, instanceExample2, instanceExample3, instanceExample4);

(function checkAges(){
    personsArray = personsArray.filter(person => person.age < 40);
    // console.log(personsArray);
    setTimeout(checkAges, 1000)
})();
(function addRandomInstance(){
    const randomName = names[Math.floor(Math.random()*names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 1;
    const randomInstance = new Person(randomName, randomAge);
    personsArray.push(randomInstance);
    setTimeout(addRandomInstance, 2000)
})();
  