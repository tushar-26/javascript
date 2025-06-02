const emp = {
  salary: 30000,
  overtime: 10,
  rate: 25.54,
  getweg() {
    return this.salary + this.overtime * this.rate;
  },
};

alert(emp.getweg());

let x = { value: 10 };

function inc(v) {
  v.value++;
}
inc(x);
alert(x.value);
