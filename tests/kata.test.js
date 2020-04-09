const kata = require('../kata');

test('greets bob', () => {
    expect(kata.greet("Bob")).toBe("Hello, Bob.");
});
test('greets my friend', () => {
    expect(kata.greet()).toBe("Hello, my friend.");
});
test('shouts at Bob', () => {
    expect(kata.greet("BOB")).toBe("HELLO BOB!");
});
test('greets Jack and Jill', () => {
    expect(kata.greet(["Jack", "Jill"])).toBe("Hello, Jack and Jill.");
});
test('greets Jack, Jill, and Bob', () => {
    expect(kata.greet(["Jack", "Jill", "Bob"])).toBe("Hello, Jack, Jill, and Bob.");
});
test('greets Jack, Jill, and Bob', () => {
    expect(kata.greet(["Jack", "JILL", "Bob"])).toBe("Hello, Jack and Bob. AND HELLO JILL.");
});
test('greets weird Bob, Charlie, and Dianne', () => {
    expect(kata.greet(["Bob","Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
});
test('greets other weird Bob, Charlie, and Dianne', () => {
    expect(kata.greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
});