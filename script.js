// davaleba1-------------------------------------------------------

function twoNumber(x, y) {
  var operator = prompt("sheiyvanet operatori");
  if (operator == "+") {
    console.log(x + y);
  } else if (operator == "-") {
    console.log(x - y);
  } else if (operator == "*") {
    console.log(x * y);
  } else if (operator == "/") {
    console.log(x / y);
  } else {
    console.log("invalid operator");
  }
}

twoNumber(10, 5);

// davaleba2------------------------------------------------------------

var circle = {
  radius: 2,
  constPi: 3.14,
  area: function () {
    console.log(this.constPi * this.radius * this.radius);
  },
};
circle.area();

// davaleba3--------------------------------------------------------------------

function Car(x, y, z) {
  this.make = x;
  this.model = y;
  this.year = z;
  this.showCarInfo = function () {
    return (
      "manqanis marka da modeli aris " +
      x +
      " " +
      y +
      "," +
      "gamshvebis weli " +
      z
    );
  };
}
var audi = new Car("audi", "a8", "2019");
var audiCarInfo = audi.showCarInfo();
console.log(audiCarInfo);

var mersedes = new Car("mersedes", "c6.s", "2020");
var merseesCarInfo = mersedes.showCarInfo();
console.log(merseesCarInfo);
