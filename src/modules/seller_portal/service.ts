import { Product } from "../product/product.model";



export const SellerService = {
    addProduct: async (payload: any) => {
        const { title, description, category, price, image, seller_email } = payload;
        const result = await Product.create({
            title: title,
            description: description,
            category: category,
            price: price,
            image: image,
            seller_email: seller_email
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
    },
    totalProducts: async (payload: any) => {
        const { seller_email } = payload;
        const totalOrder = await Product.find({ seller_email: seller_email });
        return totalOrder
    },
    productStatus: async (payload: any) => {
        const { seller_email, id, status } = payload;
        const product = await Product.findOneAndUpdate(
            {
                _id: id,
                seller_email: seller_email,
            },
            {
                $set: { status: status },
            },
            { new: true }
        );
        if (!product) {
            throw new Error("Product not found or not owned by this seller");
        }
        return product
    }
}
