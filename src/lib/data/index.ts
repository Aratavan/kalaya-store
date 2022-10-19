import { medusaClient } from "@lib/config"
import { Product } from "@medusajs/medusa"

export const getProducts = async () => {
    const payload = {} as Record<string, unknown>
    payload.limit = 1
    const products = await medusaClient.products
    .list(payload)
    .then(({products}) => products)
    .catch((_) => [])
    return products
}

export const getProductById = async (id : string): Promise<Product | null> => {
    const product = await medusaClient.products
    .retrieve(id)
    .then(({product}) => product)
    .catch((_) => null)
    return product
}
