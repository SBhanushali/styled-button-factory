export { default as getShadow } from "./getShadow";
export { default as getBackground } from "./getBackground";
export { default as getBorder } from "./getBorder";

export const getRandomString = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);