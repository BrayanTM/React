import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: () => {
    return <div data-testid="item-counter-mock">ItemCounter Mock</div>;
  },
}));

describe("FirstStepsApp", () => {
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("item-counter-mock");

    expect(itemCounters.length).toBe(5);

    screen.debug();
  });
});
