import { Page } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {}

    get shoppingCartButton() {
        return this.page.getByRole('button', {
            name: 'Shopping Cart'
        });
    }

    get addToCartButton() {
        return this.page.getByRole('button', {
            name: 'Add to Cart'
        });
    }

    async openCart() {
        await this.shoppingCartButton.click();
    }

    // Lo construiremos juntos después
    async addProductToCart(productName: string) {

    }
}