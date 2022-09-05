/*
<!------------------------------Method 1---------------------------->

  const objectCloner = (obj)=>{
    const newObj = {}
  for(let key in obj){
    newObj[key] = obj[key]
}
return newObj;
}

let human = {
   name: 'Ceyhun',
   age: 23,
   job: 'Unemployed'
}

let human2 = objectCloner(human)
console.log(human2)

<------------------------------Method 2 (assign)---------------------------->

let human = {
  name: 'Ceyhun',
  age: 23,
  job: 'Unemployed'
}

let human2 = Object.assign({},human)
console.log(human2)


<------------------------------Method 3---------------------------->


let human = {
  name: 'Ceyhun',
  age: 23,
  job: 'Unemployed'
}

let human2 = { ...human}*/