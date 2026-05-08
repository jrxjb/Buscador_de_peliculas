/*// @ts-check
import { test, expect } from '@playwright/test';

const urlImg = 'https://cataas.com/cat/says/'
const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows new content after clicking update button', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // 1. Identificamos los elementos
  const text = page.getByRole('paragraph');
  const image = page.getByRole('img').first();
  const button = page.getByRole('button', { name: 'Update' });

  // 2. Esperamos a que cargue el primer contenido
  await expect(text).not.toBeEmpty();
  const initialText = await text.textContent();
  const initialImgSrc = await image.getAttribute('src');

  // 3. HACEMOS CLIC EN EL BOTÓN
  await button.click();

  // 4. ESPERAMOS A QUE EL CONTENIDO CAMBIE
  // Playwright esperará hasta que el texto del párrafo NO sea igual al inicial
  await expect(text).not.toHaveText(initialText || '');

  // 5. VALIDAMOS LOS NUEVOS DATOS
  const newText = await text.textContent();
  const newImgSrc = await image.getAttribute('src');

  // Verificamos que el texto nuevo tenga contenido
  await expect(newText?.length).toBeGreaterThan(0);
  
  // Verificamos que la imagen sea diferente a la anterior
  expect(newImgSrc).not.toBe(initialImgSrc);
  
  // Verificamos que la nueva imagen siga cumpliendo con la URL de la API
  expect(newImgSrc?.startsWith(urlImg)).toBeTruthy();
});*/ 