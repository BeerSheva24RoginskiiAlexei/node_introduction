import { getOccurencesObject } from "../objects.mjs";

test("getOccurencesObject with destructuring", () => {
  const str = "aaabgbgc";
  let { a, b, c, g } = getOccurencesObject(str);
  expect(a).toBe(3);
  expect(b).toBe(2);
  expect(c).toBe(1);
  expect(g).toBe(2);
});
test("string with digits, spaces and underscores", () => {
  const str = "1,d-    ";
  const res = getOccurencesObject(str);
  expect(res,d).toBe(1);
  expect(res, [1]).toBe(1);
  expect(res,[" "]).toBe(4);
});

test("test for object as key inside another object", () => {
  const x = {x:5};
  const y = {y:10};
  const obj1 = {};
  obj1[x] = 100;
  const obj2 = obj1;
  obj2[y] = 300;
  expect(obj2[x]).toBe(300);
});