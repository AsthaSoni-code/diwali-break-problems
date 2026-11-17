function isTypeEqual(value1, value2) {
  return typeof value1 === typeof value2;
}

function isObject(value1, value2) {
  return typeof value1 === "object" && typeof value2 === "object";
}

// const value1 = 5;

// console.log(Array.isArray(value1));

function isArray(value1, value2) {
  return Array.isArray(value1) && Array.isArray(value2);
}

function isLengthEqual(array1, array2) {
  return array1.length === array2.length;
}

function isValueEqual(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  } else {
    for (let key = 0; key < array1.length; key++) {
      if (array1[key] === array2[key]) {
        return true;
      }
      return false;
    }
  }
}

function isArrayEqual(array1, array2) {
  if (isLengthEqual(array1, array2)) {
    return isValueEqual(array1, array2);
  }
  return false;
}

function isObjectEqual(value1, value2) {
  const keyName1 = Object.keys(value1);
  const keyName2 = Object.keys(value2);

  const object1Value = Object.values(value1);
  const object2Value = Object.values(value2);

  return (
    isArrayEqual(keyName1, keyName2) && isArrayEqual(object1Value, object2Value)
  );
}

function isEqual(value1, value2) {
  if (!isTypeEqual(value1, value2)) return false;

  if (!isObject(value1, value2)) return value1 === value2;

  if (isArray(value1, value2)) {
    return isArrayEqual(value1, value2);
  }
  return isObjectEqual(value1, value2);
}
//   return value1 === value2;

//   return false;

// const value1 = [1,2,3];
// const value2 = {};

// console.log(isEqual(value1, value2));
// console.log(isObjectEqual(value1, value2));
// console.log(isObject(value1, value2));
// console.log(isArrayEqual(value1, value2));
// console.log(isObject(value1, value2));

function test(value1, value2, massege) {
  const result = isEqual(value1, value2);
  const icon = result ? "✅" : "❌";
  console.log(`${icon} :`, massege);
}

test(1, 1, "number(true)");
test("a", "a", "string(true)");
test([], [], "same empaty array(true)");
test([1, 2, 3], [1, 2, 4], "same empaty array(false)");

test({}, {}, "same empaty object(true)");
test([], {}, "empaty array and object(false)");

test([1], [1], "same array(true)");
test([1], [1, 2], "unequal length array(false)");
test(1, "1", "number and object(false)");

test({ a: 1 }, { a: 1 }, "equal object(true)");
test({ a: 1 }, { b: 1 }, "unequal object different key name(false)");

test({ a: [1] }, { a: [1] }, "same object containing same array(true)");
test(
  { a: { b: 1 } },
  { a: { b: 1 } },
  "same object containing same object(true)",
);

// isEqual(1, 1); // true
// isEqual("a", "a"); // true
// isEqual([], []); // true
// isEqual([1], [1]); // true
// isEqual([1], [1, 2]); // false
// isEqual(1, "1"); // false

// isEqual({ a: 1 }, { a: 1 }); // true
// isEqual({ a: 1 }, { b: 1 }); // false

// isEqual({ a: [1] }, { a: [1] }); // true

// isEqual({ a: { b: 1 } }, { a: { b: 1 } }); // true
