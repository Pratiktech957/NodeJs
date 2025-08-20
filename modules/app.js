
const add = require('./2.module.js').add;
const subtract = require('./2.module.js').subtract; 
const multiply = require('./2.module.js').multiply;
const divide = require('./2.module.js').divide;
const os = require('os');
console.log(os.platform());
console.log("cpu cores: " + os.cpus().length);

console.log("free memory: " + os.freemem());
console.log("total memory: " + os.totalmem());
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));    
console.log(divide(20, 4));
