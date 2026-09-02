import { Page } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

  get logoutButton() {
    return this.page.getByRole('button', {
        name: 'Logout'
    });
}

    async logout() {
        await this.logoutButton.click();
    }
}