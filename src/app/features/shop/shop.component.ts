import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SHOP_ITEMS } from '../../shared/constants/constants';
import { ShopItem, CartItem, BlockchainTransaction, TransactionStatus } from '../../shared/types/types';

@Component({
    selector: 'app-shop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})
export class ShopComponent {
    items = signal<ShopItem[]>(SHOP_ITEMS);
    cart = signal<CartItem[]>([]);
    transactions = signal<BlockchainTransaction[]>([]);
    showCart = signal(false);
    isProcessing = signal(false);

    cartTotal = computed(() => {
        return this.cart().reduce((sum, cartItem) =>
            sum + (cartItem.item.price * cartItem.quantity), 0
        );
    });

    cartItemsCount = computed(() => {
        return this.cart().reduce((sum, cartItem) =>
            sum + cartItem.quantity, 0
        );
    });

    addToCart(item: ShopItem) {
        const existingItem = this.cart().find(ci => ci.item.id === item.id);

        if (existingItem) {
            this.cart.update(items =>
                items.map(ci =>
                    ci.item.id === item.id
                        ? { ...ci, quantity: ci.quantity + 1 }
                        : ci
                )
            );
        } else {
            this.cart.update(items => [...items, { item, quantity: 1 }]);
        }
    }

    removeFromCart(itemId: string) {
        this.cart.update(items => items.filter(ci => ci.item.id !== itemId));
    }

    updateQuantity(itemId: string, quantity: number) {
        if (quantity <= 0) {
            this.removeFromCart(itemId);
            return;
        }

        this.cart.update(items =>
            items.map(ci =>
                ci.item.id === itemId
                    ? { ...ci, quantity }
                    : ci
            )
        );
    }

    clearCart() {
        this.cart.set([]);
    }

    toggleCart() {
        this.showCart.update(v => !v);
    }

    closeCart() {
        this.showCart.set(false);
    }

    async checkout() {
        if (this.cart().length === 0) return;

        this.isProcessing.set(true);
        this.showCart.set(false);

        const transaction: BlockchainTransaction = {
            id: `tx_${Date.now()}`,
            items: [...this.cart()],
            totalAmount: this.cartTotal(),
            timestamp: new Date(),
            status: 'pending'
        };

        this.transactions.update(txs => [transaction, ...txs]);
        this.cart.set([]);

        await this.simulateBlockchainTransaction(transaction.id);

        this.isProcessing.set(false);
    }

    private async simulateBlockchainTransaction(txId: string) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        this.transactions.update(txs =>
            txs.map(tx =>
                tx.id === txId
                    ? {
                        ...tx,
                        status: 'confirmed' as TransactionStatus,
                        txHash: `0x${this.generateRandomHash()}`
                    }
                    : tx
            )
        );
    }

    private generateRandomHash(): string {
        return Array.from({ length: 64 }, () =>
            Math.floor(Math.random() * 16).toString(16)
        ).join('');
    }
}