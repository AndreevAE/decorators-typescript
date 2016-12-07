declare module 'timeDecorators' {
  export function _debounce(func: Function, timeDelay: number): Function;
  export function _throttle(func: Function, timeDelay: number): Function;
}
