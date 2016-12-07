import { debounce, throttle } from '../decorators';

export class Test {

  constructor() {
    this.log = "";
  }

  log: string;

  @debounce(1000)
  testDebounce() {
    this.log += "Debounce";
  }

  @throttle(1000)
  testThrottle() {
    this.log += "Throttle";
  }
}
