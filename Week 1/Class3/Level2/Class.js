class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }

  static myType() {
    return `${this.name} is an animal`;
  }
}

let dog = new Animal("dog", 4);

console.log(dog.describe());

console.log(Animal.myType());
