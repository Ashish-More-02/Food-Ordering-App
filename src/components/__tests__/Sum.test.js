import { Sum } from "../Sum";

test("should return a sum of two number", () => {
  let result = Sum(3, 4);

  //Assertion : this statement is important , otherwise how would this be a test!
  expect(result).toBe(7);

});
