for (let i = 0; i < 10; i++) {
  var varVariable = 10
  const constVariable = 11
  let letVariable = 12
}

console.log(varVariable) //     -- 10
// console.log(constVariable)   -- RefError
// console.log(letVariable)     -- RefError

/* 

    let и const - блочная видимость
    var - функциональная видимость

*/
