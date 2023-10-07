import MinStack from "../src/minStack";

describe("MinStack", () => {
  let minStack: MinStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  it("should push values onto the stack", () => {
    minStack.push(1);
    expect(minStack.top()).toBe(1);
    minStack.push(2);
    expect(minStack.top()).toBe(2);
  });

  it("should pop values off the stack", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.pop();
    expect(minStack.top()).toBe(1);
    minStack.pop();
    expect(() => minStack.top()).toThrowError();
  });

  it("should return the minimum value in the stack", () => {
    minStack.push(3);
    expect(minStack.getMin()).toBe(3);
    minStack.push(2);
    expect(minStack.getMin()).toBe(2);
    minStack.push(4);
    expect(minStack.getMin()).toBe(2);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
  });
});
