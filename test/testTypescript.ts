import { _debounce, _throttle } from '../decorators';

export class Test {

  constructor() {
    this.log = "";
  }

  log: string;

  @_debounce(1000)
  testDebounce() {
    this.log += "Debounce";
  }

  @_throttle(1000)
  testThrottle() {
    this.log += "Throttle";
  }
}
