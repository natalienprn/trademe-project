export function parseSearchParams(search: string): { [key: string]: string } {
  const params = new URLSearchParams(search);
  const queryParams: { [key: string]: string } = {};

  for (const [key, value] of params.entries()) {
      queryParams[key] = value;
  }

  return queryParams;
}
