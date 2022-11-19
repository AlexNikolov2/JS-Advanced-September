function smallestPrice(arr){

    for (const iterator of arr) {
        let [town, product, price] = iterator.split(' | ');
        
        arr.sort((a,b) => a.price - b.price);

        console.log(price);
    }

    
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