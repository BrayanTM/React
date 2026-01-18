import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Brayan");
    expect(h3?.innerHTML).toContain("Tebelan");
  });

  test("should render firstName and lastName - Screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });

    const h1 = screen.getByTestId("first-name-title");

    expect(h1.innerHTML).toContain("Brayan");
  });
});
