const { people , ages} = require('./people'); //Diğer dosyadan kişileri çeker

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());