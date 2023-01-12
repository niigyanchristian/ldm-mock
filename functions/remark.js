const getRemark=(value)=>{
    if(value<=10 && value >= 6){
        return "Highest";
    }else if(value<=14 && value >= 11){
        return "Higher";
    }else if(value<=19 && value >= 15){
        return "High";
    }else if(value<=24 && value >= 20){
        return "High Average";
    }else if(value<=29 && value >= 25){
        return "Average";
    }else if(value<=34 && value >= 30){
        return "Low Average";
    }else if(value<=39 && value >= 35){
        return "Low";
    }else if(value<=44 && value >= 40){
        return "Lower";
    }else if(value<=54 && value >= 45){
        return "Lowest";
    }
}

module.exports= {
    getRemark
}