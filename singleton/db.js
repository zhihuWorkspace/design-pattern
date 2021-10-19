
var dbConnect = {name: "I'm database"}

var db =  {
  getInstance: function () {
    // complex logic ...
    return dbConnect;
  }
}

module.exports = db