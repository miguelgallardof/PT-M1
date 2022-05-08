/*it("Always true", () => {
  expect(true).toBe(true);
});*/
const {
  checkSeatStatus,
  getRowNumber,
  book,
  totalSeats,
  totalBooked,
} = require("../homework");

describe("checkSeatStatus", () => {
  it("checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("should throw a TypeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(4)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });

  it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "2")).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });
  it("should return true if the seat is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });

  it("should return false if the seat is not booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });

  it("should throw a TypeError if the parameter is not a letter", () => {
    expect(() => checkSeatStatus("Hola", 1)).toThrow(
      new TypeError("This parameter is not a letter")
    );
  });

  it("should throw a TypeError if the parameter is an empty string", () => {
    expect(() => checkSeatStatus("", 1)).toThrow(
      new TypeError("This parameter is an empty string")
    );
  });

  it("should throw a TypeError if the parameter is greater than 4", () => {
    expect(() => checkSeatStatus("A", 4)).toThrow(
      new TypeError("This parameter is greater than 4")
    );
  });
});

describe("getRowNumber", () => {
  it("should return 0 if the letter given is an A", () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it("should return 2 if the letter given is a C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
});

describe("book", () => {
  it("should return true if the seat is not booked", () => {
    expect(book("E", 2)).toBe("Seat in E2 successfully booked");
  });

  it("should return true if the seat is booked", () => {
    expect(book("A", 1)).toBe("Seat in A1 is already booked");
  });

  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
    expect(book("E", 3)).toBe("Seat in E3 successfully booked");
    expect(checkSeatStatus("E", 3)).toBe(true);
    expect(book("E", 3)).toBe("Seat in E3 is already booked");
  });
  it('should return "total number of seats"', () => {
    expect(totalSeats()).toBe(20);
  });
  it('should return "total number of seats booked"', () => {
    expect(totalBooked(true)).toBe(9);
  });
});
