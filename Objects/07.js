function toJSON(arr) {
  let [columns, ...table] = arr.map(splitLine);

  function isEmptyString(x) {
    return x !== "";
  }
  function convertIfNum(x) {
    return isNaN(x) ? x : Number(Number(x).toFixed(2));
  }
  function splitLine(arr) {
    return arr
      .split("|")
      .filter(isEmptyString)
      .map((x) => x.trim())
      .map(convertIfNum);
  }

  console.log(JSON.stringify(
    table.map((entry) => {
      return columns.reduce((acc, curr, index) => {
        acc[curr] = entry[index];
        return acc;
      }, {});
    })
  ));
}
toJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
