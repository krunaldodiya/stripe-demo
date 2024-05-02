import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps, Product } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ProductList({ auth }: PageProps) {
    const { props: { products } } = usePage<{ products: Product[] }>();

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleBuyNow = async () => {
        if (selectedProduct) {
            // Replace this with your actual Stripe checkout logic
            // You'll typically redirect the user to a checkout page where they can pay using Stripe
            console.log(`Buying product: ${selectedProduct.title}`);
            console.log(`Price: $${selectedProduct.price}`);
            console.log('Redirecting to checkout page...');
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Product List</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map(product => (
                                    <div key={product.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                                        <img src={product.image_url} alt={product.title} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h4 className="text-lg font-semibold">{product.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                                            <p className="mt-2">${product.price}</p>
                                            <button onClick={() => setSelectedProduct(product)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}