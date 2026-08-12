import { test, expect } from "@playwright/test";

test.describe("Education Recruitment Landing Page", () => {
  test("hero section renders with correct headline and CTAs", async ({ page }) => {
    await page.goto("/");

    // Hero headline
    await expect(page.locator("h1")).toContainText("It's Not Too Late");

    // CTA buttons
    await expect(page.getByRole("button", { name: "Book a Free Chat" })).toBeVisible();
    await expect(page.getByRole("button", { name: "How It Works" })).toBeVisible();
  });

  test("trust badges are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("100% Free — Always")).toBeVisible();
    await expect(page.getByText("500+ Mature Students Placed")).toBeVisible();
  });

  test("services section has correct service names", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Services" }).click();
    await expect(page.getByText("University Admissions")).toBeVisible();
    await expect(page.getByText("Student Finance Support")).toBeVisible();
    await expect(page.getByText("Dedicated Consultant")).toBeVisible();
    await expect(page.getByText("Ongoing Guidance")).toBeVisible();
  });

  test("founder story mentions Valentina and Carlotta", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Valentina and Carlotta")).toBeVisible();
    await expect(page.getByText("met at university during COVID")).toBeVisible();
  });

  test("testimonials section has student stories", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Testimonials" }).click();
    await expect(page.getByText("Sarah")).toBeVisible();
    await expect(page.getByText("Marcus")).toBeVisible();
  });

  test("FAQ section addresses mature student objections", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Am I too old for university?")).toBeVisible();
    await expect(page.getByText("Is this really free?")).toBeVisible();
    await expect(page.getByText("I have children.")).toBeVisible();
  });

  test("contact form has all fields", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page.getByLabel("Your name")).toBeVisible();
    await expect(page.getByLabel("Email address")).toBeVisible();
    await expect(page.getByLabel("Phone number")).toBeVisible();
    await expect(page.getByRole("button", { name: "Book Your Free Chat" })).toBeVisible();
  });

  test("CTA button has valid href", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("button", { name: "Book a Free Chat" });
    await expect(cta).toBeVisible();
    // Click should scroll to contact section
    await cta.click();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("no hallucinated service pages exist", async ({ page }) => {
    const response = await page.goto("/services/oxbridge-preparation");
    expect(response?.status()).toBe(404);
  });
});
