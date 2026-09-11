import { Page, expect } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}

    get successMessage() {
        return this.page.locator('.post-title');
    }

    get logoutButton() {
        return this.page.getByRole('link', { name: 'Log out' });
    }

    async verifyLoggedIn() {
        await expect(this.successMessage).toHaveText('Logged In Successfully');
        await expect(this.logoutButton).toBeVisible();
    }

    async logout() {
        await this.logoutButton.click();
    }
}