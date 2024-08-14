import assert from "node:assert";
import { it, describe } from "node:test";
import { app } from "./app.js";
import { name } from "@nikitait/lib";

await describe("mock.fn", async () => {
  await it("mocks a counting function", {}, (t) => {
    const fn = t.mock.fn(app, { times: 1 });
    assert.strictEqual(name(), "lib2");

    assert.strictEqual(fn(), 0);
    assert.strictEqual(fn(), 0);
  });
});

await describe("_", async () => {
  await it("_", {}, (__proto__) => {});
});

/**
 * The difference() fn of Array instances takes an Array
 * and returns a new Array containing elements which
 * are in either this Array or the given Array,
 * but not in both.
 */
export function difference(_this: [], other: []) {
  return [_this, other];
}
