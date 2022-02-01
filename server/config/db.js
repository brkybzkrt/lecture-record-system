const mongoose = require('mongoose')


module.exports =()=>{

    mongoose.connect(process.env.MONGODB_URI)


    mongoose.connection.on('open',()=>{console.log("Connecting is successfuly to Mongodb")})
    mongoose.connection.on('err',(e)=>{console.log("There is an error",e.message)})
}