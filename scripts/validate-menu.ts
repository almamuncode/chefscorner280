import { menu } from "../src/data/menu.ts";
import assert from "node:assert/strict";
const ids = new Set<string>();
assert.equal(menu.length, 10, "Expected all 10 source categories");
for (const category of menu) {
  assert.ok(category.name.trim());
  assert.ok(category.items.length);
  for (const item of category.items) {
    assert.ok(item.name.trim(), "Missing item name");
    assert.ok(!ids.has(item.id), `Duplicate item: ${item.id}`);
    ids.add(item.id);
    assert.ok(
      item.price !== undefined || item.options?.length || item.priceNote,
      `Missing price: ${item.name}`,
    );
    if (item.price !== undefined)
      assert.ok(Number.isFinite(item.price) && item.price > 0);
    for (const option of item.options || []) {
      assert.ok(option.label.trim());
      assert.ok(Number.isFinite(option.price) && option.price > 0);
    }
    if (item.price === undefined && !item.options?.length)
      assert.ok(
        category.id === "sides" || item.name === "Slow Roasted Prime Rib",
        `Unexpected unpriced item: ${item.name}`,
      );
  }
}
assert.equal(
  ids.size,
  84,
  "Source menu inventory changed; recheck both PDF pages",
);
console.log(
  `Validated ${ids.size} menu items across ${menu.length} categories.`,
);
