var Pending = require('./pending');
class Draft {
  nextState = new Pending()
}

module.exports = Draft