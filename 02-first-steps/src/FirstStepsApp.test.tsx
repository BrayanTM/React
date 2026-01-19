/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="item-counter-mock" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => {
//     return (
//       <div
//         data-testid="item-counter-mock"
//         name={props.name}
//         quantity={props.quantity}
//       >
//         ItemCounter Mock
//       </div>
//     );
//   },
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

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

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(5);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Logitech MX Masters 4",
      quantity: 5,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Intel Ultra 9",
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Silla Secret Lab",
      quantity: 8,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Play Station 6",
      quantity: 8,
    });
  });
});
