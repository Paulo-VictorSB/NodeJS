const os = require('os');

console.log(os.version());
console.log(os.machine());
console.log(os.release());
console.log(os.cpus()[0].model);