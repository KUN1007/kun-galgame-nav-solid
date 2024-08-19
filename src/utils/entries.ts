export const entries = Object.entries as <T extends object>(
  obj: T
) => [keyof T, T[keyof T]][]
