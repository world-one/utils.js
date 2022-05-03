class Stack {

  private result: any[];

  constructor(data: any[]) {
    this.result = data;
  }

  get value() {
    return this.result;
  }

  get peek() {
    return this.result[this.result.length - 1];
  }

  push(element: any) {
    this.result = [...this.result, element];
  }

  pop() {
    const lastIndex = this.result.length - 1;
    const last = this.result[lastIndex];
    this.result.length = lastIndex;
    return last;
  }
}

export default Stack;