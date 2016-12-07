/// <reference path="lib.d.ts" />

import { _throttle, _debounce } from "timeDecorators";

export function debounce(timeDelay: number): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.value = function(func: Function) {
      return _debounce(func, timeDelay);
    }

    return descriptor;
  }
}

export function throttle(timeDelay: number): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    descriptor.value = function(func: Function) {
      return _throttle(func, timeDelay);
    }

    return descriptor;
  }
}
