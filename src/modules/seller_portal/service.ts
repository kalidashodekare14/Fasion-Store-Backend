import { Product } from "../product/product.model";



export const SellerService = {
    addProduct: async (payload: any) => {
        const { title, description, category, price, image } = payload;
        const result = await Product.create({
            title: title,
            description: description,
            category: category,
            price: price,
            image: image
        })
        return result
    },
    editProduct: async (payload: any) => {
        const { id, title, description, category, price, image } = payload;
        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: {
                    title: title,
                    description: description,
                    category: category,
                    price: price,
                    image: image
                }
            },
            {
                new: true
            }
        );

        if (!updateProduct) {
            throw new Error("Product not found");
        }

        return updateProduct;
    },
    deleteProduct: async (payload: any) => {
        const { id } = payload;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            throw new Error("Product not found");
        }
    }
}
