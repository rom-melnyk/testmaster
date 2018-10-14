type StringFunction = (object?: any) => string[];

export function cloneWithoutKeys(object: any, keys: string[] | StringFunction): object {
  if (!object) {
    return {};
  }

  const keysToRemove: string[] = typeof keys === 'function' ? keys(object) : keys;
  const newKeys = Object.keys(object).filter(k => !keysToRemove.includes(k));
  return cloneOnlyKeys(object, newKeys);
}

export function cloneOnlyKeys(object: any, keys: string[] | StringFunction): object {
  if (!object) {
    return {};
  }

  const keysToKeep: string[] = typeof keys === 'function' ? keys(object) : keys;
  return Object.keys(object)
    .filter(k => keysToKeep.includes(k))
    .reduce((accum, key) => {
      accum[key] = object[key];
      return accum;
    }, {});
}

export function wait(ms: number = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
