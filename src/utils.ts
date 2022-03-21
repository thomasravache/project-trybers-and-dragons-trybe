function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export const sleep = (milliseconds: number) => Atomics
  .wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);

export default getRandomInt;
