function getEndTime(func) {
  const start = new Date();
  func();
  return new Date() - start;
}

export default getEndTime;