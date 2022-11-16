function calories(array) {
    let obj = {}
    for (let i = 0; i < array.length; i+=2) {
        let prop = array[i]
        let value = array[i + 1]
        obj[prop] = value;
        
    }

    console.log(obj);
    
    
}
calories(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
)
