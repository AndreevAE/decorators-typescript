/// <reference path="./decorators.d.ts" />

import { throttle, debounce } from "decorators";

export function _debounce(timeDelay: number): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.value = function(func: Function) {
      return debounce(func, timeDelay);
    }

    return descriptor;
  }
}

export function _throttle(timeDelay: number): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.value = function(func: Function) {
      return throttle(func, timeDelay);
    }

    return descriptor;
  }
}
