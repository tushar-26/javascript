class Car {
  #brand;
  #model;
  speed = 0;
  moving;
  isTrunkopen;

  constructor(brand, model, giveSpeed) {
    this.#brand = brand;
    this.#model = model;
    this.speed = giveSpeed;
    if (this.speed > 0) {
      this.moving = true;
    } else {
      this.moving = false;
    }
  }

  displayInfo() {
    console.log(
      `${this.#brand} and ${this.#model} and ${this.speed} and ${this.moving} ${
        this.isTrunkopen
      }`
    );
  }

  go() {
    if (this.isTrunkopen === false) {
      this.speed += 5;
      console.log(this.speed);
    } else if (this.isTrunkopen === true) {
      console.log("because trunk is open go doesnt work");
    }
  }
  brake() {
    this.speed -= 5;
  }

  openTrunk() {
    if (!this.moving) {
      this.isTrunkopen = true;
      console.log("trunk is open");
    } else if (this.moving) {
      console.log("car is in speed means moving cant open trunk");
    }
  }
  closedTrunk() {
    this.isTrunkopen = false;
    console.log("trunk is closed");
  }
}

//const c1 = new Car("toyota", "corrolla", 150);
//const c2 = new Car("tesla", "model 3", 0);

class raceCar extends Car {
  acceleration = 0;

  constructor(brand, model, giveSpeed) {
    super(brand, model, giveSpeed);
  }

  go() {
    this.acceleration += 20;
    this.speed += this.acceleration;
  }

  openTrunk() {
    this.isTrunkopen = false;
  }
  closedTrunk() {
    this.isTrunkopen = false;
  }

  displayInfo() {
    console.log(
      `${this.brand} ${this.model} ${this.acceleration} ${this.speed}`
    );
  }
}

const c1 = new raceCar("mcLaren", "F1", 280);

c1.go();
c1.displayInfo();
console.log(raceCar.brand);
