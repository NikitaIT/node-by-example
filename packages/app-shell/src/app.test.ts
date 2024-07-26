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
