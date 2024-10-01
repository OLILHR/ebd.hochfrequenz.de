import { expect, test } from "@playwright/test";

test("sveltekit default text", async ({ page }) => {
  await page.goto("/");

  const content = await page.textContent("text=Welcome to SvelteKit");

  expect(content).toBe("Welcome to SvelteKit");
});
