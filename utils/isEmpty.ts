function isEmpty(target: any): boolean {
  if (target === undefined || target === null) return target;
  switch (target.constructor) {
    case Object:
      return isEmptyObject(target);
    case Array:
      return isEmptyArray(target);
    case String:
      return target.trim().length === 0;
    case Number: return false;
    default: return target
  }
}

module.exports = { isEmpty };
// export default isEmpty;

function isEmptyObject(obj: Record<any, any>): boolean {
  return Object.keys(obj).length === 0;
}

function isEmptyArray(arr: any[]): boolean {
  return arr.length === 0;
}