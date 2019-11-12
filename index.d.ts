interface HasWordFunction {
    (s:string) : boolean;
}

declare function wordBreak(
    s: string,
    dict: HasWordFunction,
    longestWordLength?: number
): string[];
declare namespace wordBreak {}

export = wordBreak;
  