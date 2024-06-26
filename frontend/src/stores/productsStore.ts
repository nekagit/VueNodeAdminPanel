import type { IProduct } from '@/interfaces/shop/atoms/IShopModal'
import ProductService from '@/service/ProductService'
import { defineStore } from 'pinia'
import { useAppStore } from './appStore'
export const useProductStore = defineStore('product', {
  state: () => ({
    appStore: useAppStore(),
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async createProduct(newProduct: IProduct): Promise<IProduct[]> {
      try {
        await ProductService.createProduct(newProduct)
        return await this.fetchAllProducts()
      } catch (error: any) {
        this.setError(error.message)
        throw error
      }
    },

    async fetchAllProducts(): Promise<IProduct[]> {
      try {
        this.appStore.products = await ProductService.getAllProducts()
        return this.appStore.products
      } catch (error: any) {
        this.setError(error.message)
        return this.appStore.products
      }
    },

    async getProductById(id: string): Promise<IProduct | null> {
      try {
        return await ProductService.getProductById(id)
      } catch (error: any) {
        this.setError(error.message)
        return null
      }
    },

    async updateProductById(id: string, updatedProductData: Partial<IProduct>): Promise<void> {
      try {
        await ProductService.updateProductById(id, updatedProductData)
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteProductById(id: string): Promise<void> {
      try {
        const response = await ProductService.deleteProductById(id)
        console.log(response)
        await this.fetchAllProducts()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    async deleteAllProducts(): Promise<void> {
      try {
        await ProductService.deleteAllProducts()
        await this.fetchAllProducts()
      } catch (error: any) {
        this.setError(error.message)
      }
    },

    setError(errorMessage: string | null): void {
      this.error = errorMessage
    }
  }
})
