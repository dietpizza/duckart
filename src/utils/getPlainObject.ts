export function getPlainObject(object: any) {
  return JSON.parse(JSON.stringify(object));
}
