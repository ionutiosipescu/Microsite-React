export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const TEST = "TEST";

export function test(payload) {
  return { type: TEST, payload };
}

