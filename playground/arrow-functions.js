const square = x => x * x;

const user = {
  name: 'Bill',
  age: 24,
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi, ${this.name} woudlnt work`);
  },
  sayHiAlt() {
    console.log(...arguments);
    console.log(`Hi, ${this.name} works fine`)
  }
};

user.sayHiAlt(1, 2, 3, 4);
