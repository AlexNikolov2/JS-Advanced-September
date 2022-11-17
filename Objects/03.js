function cars(obj){
    obj.engine = {};

    if(obj.power <= 90){
        obj.engine = {
            power: 90, 
            volume: 1800 
        }
    }

    if(obj.power > 90 && obj.power <= 120){
        obj.engine = {
            power: 120,
            volume: 2400
        }
    }

    if(obj.power > 120){
        obj.engine = {
            power: 200, 
            volume: 3500
        }
    }

    if(obj.carriage === 'hatchback'){
        obj.carriage = {
            type: 'hatchback',
            color: obj.color
        }
    }

    if(obj.carriage === 'coupe'){
        obj.carriage = {
            type: 'coupe',
            color: obj.color
        }
    }

    if(obj.wheelsize % 2 == 0){
        obj.wheelsize - 1
    }
    obj.wheelsize = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]

    delete obj.power;

    obj = {
        model: obj.model,
        engine: obj.engine,
        carriage: obj.carriage,
        wheelsize: obj.wheelsize

    }

    return obj;
}
cars(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }

)