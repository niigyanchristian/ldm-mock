const _ = require('lodash');
const { getAggregate } = require("./aggregate");

const calcAggregate =(ICT,RME,TWI,French,BDT,English,Maths,Social,Science)=>{
    const data=[getAggregate(ICT),getAggregate(RME),getAggregate(TWI),getAggregate(French),getAggregate(BDT)];
    const fisrtMark=data.splice(data.indexOf(_.min(data)), 1)[0];
    const secondeMark= data.splice(data.indexOf(_.min(data)), 1)[0];
    const aggregate=secondeMark+fisrtMark+getAggregate(English)+getAggregate(Maths)+getAggregate(Social)+getAggregate(Science);
    return aggregate;
}

module.exports= {
    calcAggregate
}