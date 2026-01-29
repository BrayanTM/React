import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

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

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClick(query);
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error"),
    );

    await act(async () => {
      await result.current.handleTermClick(query);
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 8 previous terms", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("Halo");
    });

    await act(async () => {
      await result.current.handleSearch("Halo1");
    });

    await act(async () => {
      await result.current.handleSearch("Halo2");
    });

    await act(async () => {
      await result.current.handleSearch("Halo3");
    });

    await act(async () => {
      await result.current.handleSearch("Halo4");
    });

    await act(async () => {
      await result.current.handleSearch("Halo5");
    });

    await act(async () => {
      await result.current.handleSearch("Halo6");
    });

    await act(async () => {
      await result.current.handleSearch("Halo7");
    });

    await act(async () => {
      await result.current.handleSearch("Halo8");
    });

    await act(async () => {
      await result.current.handleSearch("Halo9");
    });

    await act(async () => {
      await result.current.handleSearch("Halo10");
    });

    expect(result.current.previousTerms.length).toBe(8);
    expect(result.current.previousTerms).toStrictEqual([
      "halo10",
      "halo9",
      "halo8",
      "halo7",
      "halo6",
      "halo5",
      "halo4",
      "halo3",
    ]);
  });
});
