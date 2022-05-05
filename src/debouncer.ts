class Debouncer {

  private timer: NodeJS.Timeout;
  private delay: number;

  constructor(delay: number = 200) {
    this.delay = delay;
  }

  set(func: (args?: any) => void): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(func, this.delay)
  }
}

export default Debouncer;