import { expect, test } from '@playwright/test';

class LoginPage {
  static getIdentifiantInput(page: any) {
    return page.getByRole('textbox', { name: 'Identifiant' });
  }

  static getPasswordInput(page: any) {
    return page.getByRole('textbox', { name: 'Password' });
  }

  static getValidationButton(page: any) {
    return page.getByRole('button', { name: 'Se connecter' });
  }
}

test('connect apside user', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Login');
  await LoginPage.getIdentifiantInput(page).click();
  await LoginPage.getIdentifiantInput(page).fill('apside@email.com');
  await LoginPage.getIdentifiantInput(page).press('Tab');
  await LoginPage.getPasswordInput(page).fill('apside');
  await LoginPage.getValidationButton(page).click();
  await expect(page.getByText('home works!')).toBeVisible();
});