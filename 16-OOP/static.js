/*class Silver {
  static placeVisited = [];

  fly(place) {
    console.log("flying to", place);
    Silver.placeVisited.push(place);
  }
}

const o1 = new Silver();
const o2 = new Silver();
const o3 = new Silver();

o1.fly("earth");
o1.fly("moon");
o1.fly("jupiter");

console.log(Silver.placeVisited);*/

class S {
  power = "fly";

  getP() {
    console.log(this.power);
  }
}

S.prototype.Beta = function () {
  console.log("world");
};
const p1 = new S();

setTimeout(() => {
  p1.getP();
}, 3000);

p1.Beta();
