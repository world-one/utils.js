function addCommaToNumber(target: any): string {
  if (!target) return target;
  if (typeof target === 'string') {
    return Number(target).toLocaleString();
  }
  return target.toLocaleString();
}

export default addCommaToNumber;
