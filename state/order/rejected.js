var Pending = require('./pending');
class Rejected {
  nextState = new Pending()
}

module.exports = Rejected