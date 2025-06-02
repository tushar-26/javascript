class Superhero {
  //encapsulation means bundling info
  superheroName = "silver";
  location = "earth";

  constructor(location) {
    if (location) {
      this.location = location;
    }
  }

  getName() {
    this.getLocation; //funciton call
    return this.superheroName;
  }
  getLocation() {
    return this.location;
  }
}

const h1 = new Superhero();
const h2 = new Superhero("jupiter"); //poly means ability to take multiple form like we did with these 2 objs

console.log(h1.getLocation());
console.log(h2.getLocation()); //message passing
