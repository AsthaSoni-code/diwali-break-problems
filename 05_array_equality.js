function isLengthEqual(array1, array2) {
  return array1.length === array2.length;
}

function isArray(value1, value2) {
  return Array.isArray(value1) && Array.isArray(value2);
}

function isObject(value1, value2) {
  return typeof value1 === "object" && typeof value2 === "object";
}

function compareObjects(object1, object2) {
  const keyName1 = Object.keys(object1);
  const keyName2 = Object.keys(object2);

  const object1Value = Object.values(object1);
  const object2Value = Object.values(object2);

  return isEqual(keyName1, keyName2) && isEqual(object1Value, object2Value);
}

function isEqual(array1, array2) {
  if (!isArray(array1, array2)) return array1 === array2;

  if (!isLengthEqual(array1, array2)) return false;

  for (let key = 0; key < array1.length; key++) {
    if (!isEqual(array1[key], array2[key])) return false;
  }
  return true;
}

console.log(isEqual("a", 1));
