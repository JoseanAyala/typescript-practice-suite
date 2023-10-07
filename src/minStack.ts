type node = {
  value: number;
  min: number;
};

export default class MinStack {
  stack: node[] = [];

  push(val: number): void {
    this.stack.unshift({
      value: val,
      min:
        this.stack.length !== 0 && this.stack[0].min < val
          ? this.stack[0].min
          : val,
    });
  }

  pop(): void {
    this.stack.shift();
  }

  top(): number {
    return this.stack[0].value;
  }

  getMin(): number {
    return this.stack[0].min;
  }
}
