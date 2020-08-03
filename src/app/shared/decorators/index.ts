export function Emoji(): any {
  return (target: object, key: string) => {
    let val = target[key];
    const getter = () => {
      return val;
    };
    const setter = () => {
      val = `~${val}~`;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

// export function Confirmable(message: string): any {
//   return (target: object, key: string, descriptor: PropertyDescriptor) => {
//     const origin = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       const allow = window.confirm(message);
//       if (allow) {
//         const result = origin.apply(this, args);
//         return result;
//       }
//       return null;
//     };
//     return descriptor;
//   }
// }

export function Confirmable(message: string): any {
  return (taget: object, key: string, descriptor: PropertyDescriptor) => {
    const origin = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const allow = window.confirm(message);
      if (allow) { const reslut = origin.apply(this, args); return reslut; }
      return null;
    };
    return descriptor;
  };
}

