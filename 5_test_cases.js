function areValuesEqual(a, b) {
  return a === b;
}

function isEqual(a, b) {
  return areTypesEqual(a, b);
}

function areTypesEqual(a, b) {
  if (areBothArrays(a, b)) return isArrayEqual(a, b);
  return areValuesEqual(a, b);
}

function areBothArrays(a, b) {
  return Array.isArray(a) && Array.isArray(b);
}

function isLengthEqual(a, b) {
  return a.length === b.length;
}

function isArrayEqual(a, b) {
  if (!isLengthEqual(a, b)) return false;

  for (let index = 0; index < a.length; index++) {
    if (!areValuesEqual(a[index], b[index])) return false;
  }
  return true;
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
  test("two objects are equal", true, {}, {});
  //   test("two nested objects are equal", true, { a: { b: 2 } }, { a: { b: 2 } });
}

function testArrays() {
  test("two arrays are equal", true, [1, 2], [1, 2]);
  //   test("two nested arrays are equal", true, [[2], 4], [[2], 4]);
}

function testBoolean() {
  test("two boolean are equal", true, true, true);
  test("a boolean and a number should be unequal", false, true, 1);
  test("a boolean and a string should be unequal", false, true, "a");
  test("a boolean and a array should be unequal", false, true, [1, 2]);
}

function main() {
  testBoolean();
  testNumbers();
  testStrings();
  testArrays();
  testObjects();
}

main();
