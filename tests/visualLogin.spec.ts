import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Visual Regression - Login Page (Native)', () => {

    test('should match visual baseline on initial load', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Navegar a la página
        await loginPage.goto();

        // 💡 AQUÍ FORZAMOS EL CAMBIO: Escribimos texto para que la página se vea diferente a la baseline original
        await loginPage.usernameInput.fill('texto_que_rompe_la_foto');

        // 2. Tomar captura (ahora la caja tendrá texto escrito y fallará)
        await expect(page).toHaveScreenshot('login-page.png', {
            fullPage: true,
        });
    });
});