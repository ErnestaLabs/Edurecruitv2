declare module "tailwind-merge" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type ClassValue = string | number | boolean | null | undefined | ClassValue[] | ((...args: any[]) => ClassValue)
  export function twMerge(...inputs: ClassValue[]): string
}
