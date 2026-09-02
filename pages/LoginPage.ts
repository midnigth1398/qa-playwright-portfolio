import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

   get usernameInput() {
    return this.page.getByLabel('Username');
    }

    get passwordInput() {
    return this.page.getByLabel('Password');
    }

    get loginButton() {
    return this.page.getByRole('button', {
        name: 'Submit'
    });
    }
    
    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}