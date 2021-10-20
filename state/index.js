const Draft = require('./order/draft.js')
const Rejected = require('./order/rejected.js')
const Approved = require('./order/approved.js')
class Order {
  constructor(state) {
    this.state = state
    return this
  }

  switchToNextState(state) {
    if(this.state.nextState || state) {
      this.state = this.state.nextState || state
    }
  }
}


const order = new Order(new Draft())

// Draft
function fn1(){
  console.log('Initial state -> ', order.state.constructor.name)
}

// Pending
function fn2(){
  order.switchToNextState()
  console.log('state -> ', order.state.constructor.name)
}

// Rejected
function fn3(){
  order.switchToNextState(new Rejected())
  console.log('state -> ', order.state.constructor.name)
}

// Pending
function fn4(){
  order.switchToNextState()
  console.log('state ->  -> ', order.state.constructor.name)
}

// Approved
function fn5(){
  order.switchToNextState(new Approved())
  console.log('state -> ', order.state.constructor.name)
}

module.exports = {
  fn1, fn2, fn3, fn4, fn5, order
}