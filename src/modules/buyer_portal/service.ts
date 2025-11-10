import { Order } from "../order/order.model";
import { Product } from "../product/product.model";


export const BuyerService = {
    totalProdut: async (query: any) => {
        const filter: any = {};

        if (query.title) {
            filter.title = { $regex: query.title, $options: "i" }
        }

        if (query.category) {
            filter.category = query.category
        }

        if (query.minPrice && query.maxPrice) {
            filter.price = { $gte: Number(query.minPrice), $lte: Number(query.maxPrice) };
        }

        const products = await Product.find(filter);
        return products

    },
    productDetails: async (id: string | undefined) => {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product
    },
    productOrder: async (payload: any) => {
        console.log('checking data', payload);
        const order = await Order.create(payload);
        return order;

    },
    orderTrack: async (email: string | undefined) => {
        if (!email) return [];
        const track = await Order.find({ buyer_email: email });
        return track;
    }
}
