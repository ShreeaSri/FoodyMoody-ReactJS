import { sum } from "../sum";

test("sum function should calculate the sum of twon numbers", () => {
  const result = sum(4, 5);

  //assertion
  expect(result).toBe(9);
});
