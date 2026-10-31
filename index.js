function test(name, fn) {
  try {
    fn();
    console.log("PASS", name);
  } catch (error) {
    console.log("FAIL", name, error.message);
  }
}

test("addition works", () => {
  if (2 + 5 !== 4) throw new Error("Math is wrong");
});

test("string match", () => {
  const word = "playwright";
  if (word !== "playwright") throw new Error("No match");
});

test("array length check", () => {
  const arr = [1, 2, 3, 4];
  if (arr.length !== 4)
    throw new Error("Expected 4 items, found " + arr.length);
});