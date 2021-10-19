
var Bank = require('./bank');
var Background = require('./background');
var Credit = require('./credit');

var Mortgage = function (name) {
  this.name = name;
}

Mortgage.prototype = {
  applyFor: function (amount) {
      // access multiple subsystems...
      var result = "approved";
      if (!new Bank().verify(this.name, amount)) {
          result = "denied";
      } else if (!new Credit().get(this.name)) {
          result = "denied";
      } else if (!new Background().check(this.name)) {
          result = "denied";
      }
      return this.name + " has been " + result +
          " for a " + amount + " mortgage";
  }
}

function run() {
  var mortgage = new Mortgage("Davy Chen");
  var result = mortgage.applyFor("$100,000");

  console.log(result);
}

run()