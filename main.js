/*
const from = {
    ye: 0,
    mo: 0,
    da: 0,
    ho: 0,
    mi: 0,
    se: 0
  }
  
  const to = {
    ye: 0,
    mo: 1,
    da: 1,
    ho: 10,
    mi: 12,
    se: 45
  } */
  
let fromTime = Date.parse(1978, 9, 22, 3, 15);
console.log(fromTime);
let currentTime = new Date();
let currentTimeMsec = Date.parse(currentTime);
console.log(currentTimeMsec);

let diff = new Date (currentTime - fromTime);
console.log("aikaero " + diff);
  
  function duration(from, to){
    
  
  }