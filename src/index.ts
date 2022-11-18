import RNSha256Module from "./RNSha256Module";

export function md5(input: string): string {
  return RNSha256Module.md5(input);
}

export function sha1(input: string): string {
  return RNSha256Module.sha1(input);
}

export function sha256(input: string): string {
  return RNSha256Module.sha256(input);
}

export function sha384(input: string): string {
  return RNSha256Module.sha384(input);
}

export function sha512(input: string): string {
  return RNSha256Module.sha512(input);
}
