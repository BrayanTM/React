import { expect, test } from "vitest";
import { add } from "./math.helper";

test("should add two positeive numbers", () => {
  // ! 1. Arrange
  const a = 3;
  const b = 3;

  // ! 2. Act
  const result = add(a, b);

  // ! 3. Assert
  expect(result).toBe(6);
});
