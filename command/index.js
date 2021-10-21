const actionCreator = function(actionName, payload) {
  return { action: actionName, payload }
}

const receiverFunction = function(plainObject) {
  if(plainObject.action === 'GetUserDetail') {
    console.log(plainObject.action, 'I will get user detail with :', JSON.stringify(plainObject.payload))
  } else if(plainObject.action === 'GetUserList') {
    console.log(plainObject.action, 'I will get user list with :', JSON.stringify(plainObject.payload))
  } else if(plainObject.action === 'DeleteOneUser') {
    console.log(plainObject.action, 'I will delete a user by :', JSON.stringify(plainObject.payload))
  }
}

const invoker = function(actionName, payload) {
  const plainObject = actionCreator(actionName, payload)
  receiverFunction(plainObject)
}

invoker('GetUserDetail', {id: 1})

invoker('GetUserList', {page: 1, size: 20})

invoker('DeleteOneUser', {id: 1})
