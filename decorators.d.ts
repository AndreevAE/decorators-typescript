declare module "decorators" {

  export function debounce(func: Function, timeDelay: number): Function;
  export function throttle(func: Function, timeDelay: number): Function;
}
