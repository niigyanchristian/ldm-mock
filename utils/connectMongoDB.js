const mongoose= require('mongoose')

mongoose.set("strictQuery", false); 

const MongoDB = async()=> await mongoose.connect(process.env.URL,{useNewUrlParser: true});

module.exports = MongoDB;
