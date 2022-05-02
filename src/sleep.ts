function sleep(millisecond: number): void {
  const appointmentTime: number = Date.now() + millisecond;
  while (Date.now() < appointmentTime) { }
}

export default sleep;