class Throttle {

  private timer: NodeJS.Timeout;
  private delay: number;

  constructor(delay: number = 200) {
    this.delay = delay;
  }

  set(func: (args?: any) => void): void {
    if (this.timer) return;

    this.timer = setTimeout(() => {
      func();
      this.timer = null;
    }, this.delay)
  }
}

export default Throttle;