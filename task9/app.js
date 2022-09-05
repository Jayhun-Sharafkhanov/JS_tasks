//obyektde properytilerin sayini tap

const human ={
  name:'Ceyhun',
  age:23,
  job:'Dev',

}

let count=0;

for(let key in  human){
   count++
}
console.log(`Obyektde ${count} eded property var`)