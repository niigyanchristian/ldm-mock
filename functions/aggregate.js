const getAggregate=(value)=>{
    if(value<=100 && value >= 90){
        return 1;
    }else if(value<=89 && value >= 80){
        return 2;
    }else if(value<=79 && value >= 70){
        return 3;
    }else if(value<=69 && value >= 60){
        return 4;
    }else if(value<=59 && value >= 55){
        return 5;
    }else if(value<=54 && value >= 50){
        return 6;
    }else if(value<=49 && value >= 40){
        return 7;
    }else if(value<=39 && value >= 35){
        return 8;
    }else if(value<=34 && value >= 0){
        return 9;
    }
}

// 89-80=2
// 79-70=3
// 69-60=4
// 59-55=5
// 54-50=6
// 49-40=7
// 39-35=8
// 34-0=9

module.exports= {
    getAggregate
}