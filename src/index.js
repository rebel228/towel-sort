
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix) {
    matrix.forEach(function(element, id) {
      if(id % 2 === 0) {
        element.forEach(e => {
          result.push(e);
        })
      }
      else {
        let arr = element.reverse();
        arr.forEach(function(e) {
          result.push(e);
        })
      }
    });
  }
  return result;
}
