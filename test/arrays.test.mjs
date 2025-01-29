import { describe, it, expect } from "vitest";
const array = [10, 1000, -10, 30, 60];
describe("destructuring array", () => {
  it("assigning two first numbers of array to different variables", () => {
    const [a, b] = array;
    expect(a).toBe(array[0]);
    expect(b).toBe(array[1]);
  });
  it("swap of values by using destructuring", () => {
    let a = 10;
    let b = 20;
    [b,a] = [a,b];
    expect(a).toBe(20);
    expect(b).toBe(10);
  });
});
