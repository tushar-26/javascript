interface ISuperhero {
  name: string;
  power: string;
  getPower: Function;
}

class Superhero implements {
  #special = "boot";

  GetSP() {
    return 5 + 4;
  }
}

//we dont have protected in js we have only private and public in js.
const SV = new Superhero();

//console.log(SV.#special);

console.log(SV.GetSP);
