// @ts-check
import { test, expect } from '@playwright/test';

const urlImg = 'https://cataas.com/cat/says/'
const LOCALHOST_URL  = 'http://localhost:5173/'

test('App show radom fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  
  //Elemetos
  const text =  page.getByRole('paragraph')
  const image =  page.getByRole('img').first();
  const button =  page.getByRole('button', {name: 'Update'})

  //Se espera el primer contenido
  await expect(text).not.toBeEmpty();
  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')
  

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(urlImg )).toBeTruthy()

  //button 
  await button.click();

  // 4. ESPERAMOS A QUE EL CONTENIDO CAMBIE
  await expect(text).not.toHaveText( textContent || '');

  const newTextContent = await text.textContent()
  await expect(newTextContent?.length).toBeGreaterThan(0)
  
  const newImage =  page.getByRole('img').first();
  const newImgSrc = await newImage.getAttribute('src')
  expect(newImgSrc).not.toBe(imgSrc);
  await expect(newImgSrc?.startsWith(urlImg)).toBeTruthy()



});

/*
debo quitar lo await de los getByRole?
npm init playwright@latest
para correrlo npx playwright test
});*/ 
