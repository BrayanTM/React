import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";

describe("useGifs", () => {
  const query = "Halo";

  test("should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClick).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch(query);
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handleTermClick is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick(query);
    });

    expect(result.current.gifs.length).toBe(10);
  });
});
