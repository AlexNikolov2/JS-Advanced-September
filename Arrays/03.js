function addRemove(arr) {
  let newArr = [];
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num++;
    if (arr[i] === "add") {
      newArr.push(num);
    } else if (arr[i] === "remove") {
      newArr.pop(i);
    }
  }
  
  if (newArr.length === 0) {
    return "Empty";
  } else {
    console.log(newArr.join("\n"));
  }
}
addRemove(["add", "add", "add", "add"]);
