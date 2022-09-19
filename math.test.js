const {divide, multiply, subtract, sum} = require("./math");

describe("Math", () => {

    it("should subtract 10 - 5 to be 5", () => {
        const result = subtract(10, 5)
        expect(result).toBe(5);
    })
    
    
    it("should sum 2 + 2 to be 4", () => {
      const result = sum(2, 2);
      expect(result).toBe(4);
    });

    it("should multiply 3 * 3 to result to 9", () => {
      const result = multiply(3, 3);
      expect(result).toBe(9);
    });

    it("should divide 12 / 2 to result to 6", () => {
      const result = divide(12, 2);
      expect(result).toBe(6);
    });
    it("should be falsy", () => {
        expect(undefined).toBeFalsy()
    })
});

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
});


//  falsy remember okay...