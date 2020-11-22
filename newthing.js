board = [1, 2, 3, 4, 5];

board[3] = "hello";

console.log(board);
nothaArr = [1, 2, 3, 4, 5];
const newFun = (x, y) => {
  let newArr = [x][y];

  console.log(newArr);
};
newFun(4, 5);

// make 6x7 color in grid
// set array value to "a" which means circle is colored in
// Array[0][0] = “a”
// fill in row takes in column and string
//set 2d array to string value
//pass a to string
// invocation of function looks like : FillInRow(1, 2 “a”)
//using function to populate array
// then connect to board
// get id from onclicl function
// parse id into parameter to call function
