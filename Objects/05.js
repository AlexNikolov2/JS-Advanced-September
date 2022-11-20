function smallestPrice(arr){

    let obj = {};

    for (const iterator of arr) {
        let [town ,product, price] = iterator.split(' | ');

        if(!obj[product]){
            obj[product] = { town, price: Number(price)}
        }
        else{
            obj[product] = obj[product].price <= Number(price) ? obj[product] : {town, price:Number(price)}
        }
    }

    let result = [];

    for (const key in obj) {
        result.push(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }

    console.log(result.join('\n'));

    
}
smallestPrice(
    ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']

)