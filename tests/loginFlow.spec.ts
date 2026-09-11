import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('E2E Login and Dashboard Flow', () => {

    test('should login successfully and verify dashboard elements', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        // 1. Ir a la página de login
        await loginPage.goto();

        // 2. Iniciar sesión con las credenciales de prueba del sitio
        await loginPage.login('student', 'Password123');

        // 3. Validar que llegamos a la página correcta (mensaje de éxito y botón de salir)
        await productsPage.verifyLoggedIn();

        // 4. Cerrar sesión para finalizar el flujo
        await productsPage.logout();
        
        // 5. Verificar que volvimos a la pantalla de login
        await expect(page).toHaveURL(/practice-test-login/);
    });
});