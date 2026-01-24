import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Mahoraga Win";
  const description = "Busca gifs de mahoraga";

  test("should render the tittle correctly", () => {
    render(<CustomHeader tittle={title} />);

    expect(screen.findAllByText(title)).toBeDefined();
  });

  test("should render the description when provided", () => {
    render(<CustomHeader tittle={title} description={description} />);

    expect(screen.findAllByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    const { container } = render(<CustomHeader tittle={title} />);

    const divElement = container.querySelector(".content-center");
    const h1 = divElement?.querySelector("h1");
    const p = divElement?.querySelector("p");

    expect(h1?.innerHTML).toBe(title);
    expect(p).toBeNull();
  });
});
