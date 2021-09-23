function createSortedList(){
    return{
        numbers:[],
        size: 0,
        add(x){
            this.numbers.push(x);
            this.numbers.sort((a,b)=>a-b);
            this.size+=1;
        },
        remove(index){
            if(index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
                this.size -=1;
            }
        },
        get(index){
            if(index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));