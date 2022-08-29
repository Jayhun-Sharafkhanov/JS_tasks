//callback func

function add (a , b , func){
  let result = a + b
  func(result)
}

add(3,5,console.log)

add(3,5,alert)