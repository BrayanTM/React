import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positeive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 3;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two positeive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });

  test("should subtract two negative numbers", () => {
    // ! 1. Arrange
    const a = -3;
    const b = -2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positeive numbers", () => {
    // ! 1. Arrange
    const a = 3;
    const b = 3;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });

  test("should multiply two negative numbers", () => {
    // ! 1. Arrange
    const a = -3;
    const b = -2;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });

  describe("divide", () => {
    test("should divide two positeive numbers", () => {
      // ! 1. Arrange
      const a = 6;
      const b = 2;

      // ! 2. Act
      const result = divide(a, b);

      // ! 3. Assert
      expect(result).toBe(a / b);
    });

    test("should multiply two negative numbers", () => {
      // ! 1. Arrange
      const a = -6;
      const b = -2;

      // ! 2. Act
      const result = divide(a, b);

      // ! 3. Assert
      expect(result).toBe(a / b);
    });
  });
});
