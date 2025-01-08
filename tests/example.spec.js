const { _electron: electron } = require("playwright");
const { test } = require("@playwright/test");

test("LAUNCH", async () => {
  await electron.launch({ args: ["main.js"] });
});
