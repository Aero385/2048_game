let board;
let score = 0;
const rows = 4;
const columns = 4;

function setGame() {
  document.getElementById("board").innerHTML = "";
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  for(let r = 0; r < rows; r++){
    for(let c = 0; c < columns; c++){
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString(); 
      let num = board[r][c];
      console.log(num);
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }
  setTwo();
  setTwo();
}

function gameRestart() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  // for(let r = 0; r < rows; r++){
  //   for(let c = 0; c < columns; c++){
  //     let tile = document.createElement("div");
  //     tile.id = r.toString() + "-" + c.toString(); 
  //     let num = board[r][c];
  //     console.log(num);
  //     updateTile(tile, num);
  //     document.getElementById("board").append(tile);
  //   }
  // }
}

function hasEmptyTile () {
  for(let r = 0; r < rows; r++){
    for(let c = 0; c < columns; c++){
      if(board[r][c] == 0){
        return true;
      }
    }
  }
  return false;
}

function setTwo() {
   if(!hasEmptyTile()) {
    return;
   }

   let found = false;
   while(!found){
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    if(board[r][c] == 0) {
      board[r][c] = 2;
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      tile.innerText = "2";
      tile.classList.add("x2");
      found = true;
    }
   }
}

function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if(num > 0){
    tile.innerText = num;
    if(num <= 4096){
      tile.classList.add("x"+num.toString());
    }else {
      tile.classList.add("x8192");
    }
  }
}

function filterZero(row) {
  return row.filter(num => num != 0);  //create a new array without zeroes
}

function slide(row){
  row = filterZero(row);    
  for(let i = 0; i < row.length - 1; i++){
    if(row[i] == row[i+1]){
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }
  row = filterZero(row); 

  while(row.length < columns){
    row.push(0);
  }
  return row;
}

function slideLeft() {
   for(let r = 0; r < rows; r++){
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for(let c = 0; c < columns; c++){
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
   }
   setTwo();
}

function slideRight() {
  for(let r = 0; r < rows; r++){
   let row = board[r];
   row.reverse();
   row = slide(row);
   row.reverse();
   board[r] = row;

   for(let c = 0; c < columns; c++){
     let tile = document.getElementById(r.toString() + "-" + c.toString());
     let num = board[r][c];
     updateTile(tile, num);
   }
  }
  setTwo();
}

  function slideUp() {
    for(let c = 0; c < columns; c++){
      let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
      row = slide(row);
      board[0][c] = row[0];
      board[1][c] = row[1];
      board[2][c] = row[2];
      board[3][c] = row[3];
      for(let r = 0; r < rows; r++){
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        let num = board[r][c];
        updateTile(tile, num);
      }
    }
    setTwo();
  }

  function slideDown() {
    for(let c = 0; c < columns; c++){
      let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
      row.reverse();
      row = slide(row);
      row.reverse();
      board[0][c] = row[0];
      board[1][c] = row[1];
      board[2][c] = row[2];
      board[3][c] = row[3];
      for(let r = 0; r < rows; r++){
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        let num = board[r][c];
        updateTile(tile, num);
      }
    }
    setTwo();
  }


export {setGame,slideLeft, slideRight, slideUp, slideDown, setTwo, score, gameRestart};
