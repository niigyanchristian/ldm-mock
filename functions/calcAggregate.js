const _ = require('lodash');

const calcAggregate = (ICT,RME,TWI,French,BDT,English,Maths,Social,Science)=>{
    const data=[ICT,RME,TWI,French,BDT];
    const fisrtMark=data.splice(data.indexOf(_.min(data)), 1)[0];
    const secondeMark= data.splice(data.indexOf(_.min(data)), 1)[0];
    const aggregate=parseInt(secondeMark)+parseInt(fisrtMark)+parseInt(English)+parseInt(Maths)+parseInt(Social)+parseInt(Science);
    
    return aggregate;
}

module.exports= {
    calcAggregate
}