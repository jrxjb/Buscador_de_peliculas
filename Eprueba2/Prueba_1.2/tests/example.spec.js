// @ts-check
import { test, expect } from '@playwright/test';

const urlImg = 'https://cataas.com/cat/says/'
const LOCALHOST_URL  = 'http://localhost:5173/'

test('App show radom fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  
  
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img').first();
  await expect(text).not.toBeEmpty();
  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(urlImg )).toBeTruthy()
});
