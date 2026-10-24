const moonngoose = require('moongose');

async  function connectDB(){
await moongose.connect('')
console.log ('connected to database')
}

module.exports = connectDB;