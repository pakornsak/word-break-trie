interface HasWordFunction {
    (s:string) : boolean;
}

declare function wordBreakTrie(
    s: string,
    dict: HasWordFunction,
    longestWordLength?: number
): string[];
declare namespace wordBreakTrie {}

export = wordBreakTrie;
  