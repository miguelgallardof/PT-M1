const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function getSeat(row, number) {
  const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  return layoutRows[number];
}

function checkSeatStatus(row, number) {
  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");
  if (row.length > 2) throw new TypeError("This parameter is not a letter");
  if (row === "") throw new TypeError("This parameter is an empty string");
  if (number > 3) throw new TypeError("This parameter is greater than 4");
  /* const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number]; */
  let seat = getSeat(row, number);
  return seat.booked;
  //return layout[getRowNumber(row)][number].booked;
}

function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
}

function book(row, number) {
  if (checkSeatStatus(row, number)) {
    return "Seat in " + row + number + " is already booked";
  }
  /* const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number]; */
  let seat = getSeat(row, number);
  seat.booked = true;
  return "Seat in " + row + number + " successfully booked";
}

function totalSeats() {
  let total = 0;
  for (let i = 0; i < layout.length; i++) {
    total += layout[i].length;
  }
  //console.log(total);
  return total;
}

function totalBooked(row, number) {
  let seat = getSeat(row, number);
  if (seat.book == true) {
    let cont1 = 0;
    for (let i = 0; i < layout.length; i++) {
      cont1 += layout[i].length;
    }
    console.log(cont1);
    return cont1;
  }
}

/* function totalNoBooked() {
  if ((seat.booked = false)) {
    let total = 0;
    for (let i = 0; i < layout.length; i++) {
      total += layout[i].length;
    }
    return total;
  } 
}*/

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  totalSeats,
  totalBooked,
};
