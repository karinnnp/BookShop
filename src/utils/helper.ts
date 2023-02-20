import { OrderState, ProductState } from "../redux/slice/order";
import { OrdersType } from "../types/order";

export const setReduxIsTrueFromData = (order: OrderState, detail: OrdersType) => {
    const data: ProductState[] = []
    
    order.products.forEach(item => {
        const productDup = detail.products.filter(p => p.id === item.productId)
        if (productDup.length > 0) {
            data.push({ productId: item.productId, quantity: productDup[0].quantity, selected: true })
        } else {
            data.push({ ...item, selected: false })
        }
    })

    const productDup = detail.products.filter(item => !order.products.some((rightValue) => item.id === rightValue.productId))
    if (productDup.length > 0) {
        data.push({ productId: productDup[0].id, quantity: productDup[0].quantity, selected: true })
    }

    return { products: data.sort((a,b) => a.productId - b.productId) }
};