class Superhero {
  name = "tush";
  power = "avtar";

  constructor(villainName) {
    this.villainName = villainName; //we can create class feilds in constructor
  }

  fightTovillain() {
    console.log("fight", this.villainName);
  }

  swim() {}
}

// we asked for banana but we got tree where monkey holding banana
class silverSulfer extends Superhero {
  constructor() {
    super("procrastinationX");
  }
  getDetails() {
    console.log(this.name);
    console.log(this.power);
    console.log(this.villainName);
  }
  fightTovillainkid() {
    super.fightTovillain();
  }
}

const s1 = new silverSulfer();

s1.fightTovillainkid();
s1.getDetails();
