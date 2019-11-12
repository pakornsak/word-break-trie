# word-break-trie

word-break util using a trie dictionary

## TypeScript

```ts
import wordBreak from "word-break-trie";
import trie from "trie-prefix-tree";

test("wordBreak", () => {
  const input = "ilikesamsung";
  const dict = trie(["samsung", "like", "i"]);
  const list = wordBreak(input, dict.hasWord);
  expect(list.join("|")).toBe("i|like|samsung");
});
```
