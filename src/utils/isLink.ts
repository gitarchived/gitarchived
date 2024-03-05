export const isLink = (url: string): boolean => {
  const hosts = ["github.com"];

  return url.match(/^https?:\/\//) && hosts.some((host) => url.includes(host)) ? true : false;
}
