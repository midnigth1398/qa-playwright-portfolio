import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    await expect(page.locator('#error')).toBeVisible();
});