function isLengthEqual(a, b) {
  return a.length === b.length;
}

function areBothArrays(a, b) {
  return Array.isArray(a) && Array.isArray(b);
}

function isArrayEqual(a, b) {
  if (!isLengthEqual(a, b)) return false;

  for (let index = 0; index < a.length; index++) {
    if (!isEqual(a[index], b[index])) return false;
  }
  return true;
}

function areBothObjects(a, b) {
  return typeof a === "object" && typeof b === "object";
}

function areObjectsEqual(a, b) {
  if (!isLengthEqual(Object.keys(a), Object.keys(b))) return false;

  for (const key in a) {
    if (!(key in b)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
}

function areValuesEqual(a, b) {
  return a === b;
}

function type(a) {
  if (a === null) return "null";
  if (Array.isArray(a)) return "Array";
  return typeof a;
}

function areTypesEqual(a, b) {
  return type(a) === type(b);
}

function isEqual(a, b) {
  if (areValuesEqual(a, b)) return true;

  if (!areTypesEqual(a, b)) return false;

  switch (type(a)) {
    case "Array":
      return areObjectsEqual(a, b);

    case "object":
      return areObjectsEqual(a, b);
  }
  return false;
}

function test(massege, expected, a, b) {
  const actual = isEqual(a, b);
  const result = expected === actual ? "✅" : "❌";
  console.log(`${result} | ${massege}`);
}

function testNumbers() {
  test("two same numbers are equal", true, 2, 2);
  test("two different numbers are unequal", false, 3, 2);
}

function testStrings() {
  test("two same strings are equal", true, "a", "a");
  test("two different strings are unequal", false, "b", "a");
}

function testObjects() {
  test("two objects are equal", true, { a: 1, b: 4 }, { b: 4, a: 1 });
  test("two different objects are unequal", false, { a: 1 }, { a: 1, b: 3 });
  test(
    "two same nested objects are equal",
    true,
    { a: 1, b: { a: 1 }, c: 2 },
    { a: 1, b: { a: 1 }, c: 2 },
  );
  test(
    "two different nested objects are unequal",
    false,
    { a: 1, b: { a: 1 }, c: 2 },
    { a: { a: 1 }, c: 2 },
  );
}

function testArrays() {
  test("two arrays are equal", true, [1, 2], [1, 2]);
  test("two different arrays are unequal", false, [1], []);
  test("two nested arrays are equal", true, [[2], 4], [[2], 4]);
  test("two different nested arrays are unequal", false, [[2, 3], 4], [[2], 4]);
}

function testBoolean() {
  test("two boolean are equal", true, true, true);
  test("a boolean and a number should be unequal", false, true, 1);
  test("a boolean and a string should be unequal", false, true, "a");
  test("a boolean and a array should be unequal", false, true, [1, 2]);
}

function testUndefindNullNaN() {
  test("two null values are equal", true, null, null);
  test("two undefined values are equal", true, undefined, undefined);
  test("undefined and null is unequal", false, undefined, null);
}

function main() {
  testBoolean();
  testNumbers();
  testStrings();
  testArrays();
  testObjects();
  testUndefindNullNaN();
}

main();
