export default function prettyJson(json: any) {
  return JSON.stringify(json, null, 2);
}