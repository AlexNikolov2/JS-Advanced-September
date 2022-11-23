function increment(arr, step){
    let newArray = [];
    for (let i = 0; i < arr.length; i+=step) {
        const element = arr[i];
        newArray.push(element)
    }
    console.log(newArray);
}
increment(
    ['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
)