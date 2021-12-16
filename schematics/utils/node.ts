export function getNodeMajorVersion(): number {
  return +process.version.match(/^v(\d+)/)[1];
}
